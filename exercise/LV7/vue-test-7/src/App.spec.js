import { mount } from '@vue/test-utils';
import App from './App.vue';

jest.mock('vue-router', () => ({
  //
  useRoute: jest.fn(() => ({ path: '' })),
}));

describe('App.vue', () => {
  it('route test', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });

    // console.log(wrapper.html());
    expect(wrapper.find('#home').classes('active')).toBe(true);
  });
});
