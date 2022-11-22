import { createStore } from 'vuex';
import { store } from '@/store';

describe('test Store commit', () => {
  it('test store commit', () => {
    const $store = createStore(store);
    $store.dispatch('handleOpenState', true);
    expect($store.state.isOpen).toBe(true);
    expect($store.getters['isOpenAddStr']).toBe('狀態是 true');
  });

  const CreateStoreDefault = (initState) => {
    return createStore({
      state() {
        return {
          count: 0,
          ...initState,
        };
      },
      actions: {
        addCount(context) {
          context.commit('addCount');
        },
      },
      mutations: {
        addCount(state) {
          state.count++;
        },
      },
    });
  };

  it('test default store state 1', () => {
    const $store = CreateStoreDefault({ count: 5 });
    console.log('1=>', $store.state.count);
    $store.dispatch('addCount');
    expect($store.state.count).toBe(6);
  });

  it('test default store state 2', () => {
    const $store = CreateStoreDefault({ count: 8 });
    console.log('2=>', $store.state.count);
    $store.dispatch('addCount');
    expect($store.state.count).toBe(9);
  });
});
