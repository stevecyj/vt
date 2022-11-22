import { createStore } from 'vuex';
import { store } from '@/store';

describe('test Store commit', () => {
  it('test store commit', () => {
    const $store = createStore(store);
    $store.dispatch('handleOpenState', true);
    expect($store.state.isOpen).toBe(true);
    expect($store.getters['isOpenAddStr']).toBe('狀態是 true');
  });
});
