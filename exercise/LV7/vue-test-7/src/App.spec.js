import { mount } from '@vue/test-utils';
import App from './App.vue';

describe('App.vue', () => {
  it('route test', () => {
    const wrapper = mount(App, {
      global: {
        stubs: ['router-link', 'router-view'],
      },
    });
  });
});
