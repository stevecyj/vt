import { shallowMount } from '@vue/test-utils';
import Content from '@/components/CardBox/Content.vue';

describe('Content', () => {
  it('should be class is red', () => {
    const wrapper = shallowMount(Content);
    // console.log(wrapper.find('h1').classes());
    expect(wrapper.find('h1').classes('red')).toBe(true);
  });

  it('should be button is disabled attr', () => {
    const wrapper = shallowMount(Content);
    expect(wrapper.find('a').attributes('href')).toBe('javascript:;');
  });
});
