import { mount } from '@vue/test-utils';
import ContentBox from '@/components/ContentBox';

describe('ContentBox.vue', () => {
  it('should be props', async () => {
    const wrapper = mount(ContentBox);
    await wrapper.setProps({ isOpen: false });
    expect(wrapper.find('.box').isVisible()).toBe(false);
  });
});
