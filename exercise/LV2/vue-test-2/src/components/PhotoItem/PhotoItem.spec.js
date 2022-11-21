import { shallowMount } from '@vue/test-utils';
import PhotoItem from '@/components/PhotoItem/';

describe('PhotoItem', () => {
  it('should be v-show or v-if', () => {
    const wrapper = shallowMount(PhotoItem);
    expect(wrapper.find('#box1').exists()).toBe(false);
    expect(wrapper.find('#box2').isVisible()).toBe(false);
  });
});
