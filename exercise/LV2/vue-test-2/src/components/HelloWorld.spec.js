import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';

describe('HelloWorld', () => {
  it('should be html', () => {
    const wrapper = shallowMount(HelloWorld);
    // console.log(wrapper.html());

    expect(wrapper.html()).toMatch(
      '<a href="https://cli.vuejs.org" target="_blank" rel="noopener"> vue-cli documentation </a>'
    );

    expect(wrapper.find('a').html()).toMatch(
      '<a href="https://cli.vuejs.org" target="_blank" rel="noopener"> vue-cli documentation </a>'
    );

    expect(wrapper.find('p').html()).toMatch('For a guide and recipes');
  });
});
