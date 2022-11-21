import { mount } from '@vue/test-utils';
import CardBox from '@/components/CardBox';
import ImageBox from '@/components/CardBox/ImageBox.vue';
import HelloWorld from '@/components/HelloWorld';

describe('CardBox', () => {
  it('should be cardBox', () => {
    const wrapper = mount(CardBox);

    // console.log(wrapper.findComponent(ImageBox));

    expect(wrapper.findComponent(ImageBox).exists()).toBe(true);

    // console.log(wrapper.findAllComponents(ImageBox).at(0));
  });
});
