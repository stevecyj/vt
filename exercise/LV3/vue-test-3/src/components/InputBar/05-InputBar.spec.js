import { mount } from '@vue/test-utils';
import InputBar from '@/components/InputBar';

describe('InputBar.vue', () => {
  it('should test InputBar', () => {
    const wrapper = mount(InputBar);

    wrapper.find('input.name').setValue('Mike');
    wrapper.find('input.email').setValue('1234@gmail.com');
    // wrapper.find('input.name').setValue('Mike');
    expect(wrapper.find('input.name').element.value).toBe('Mike');
    expect(wrapper.find('input.email').element.value).toBe('1234@gmail.com');
  });

  it('test thousand', async () => {
    const wrapper = mount(InputBar);
    await wrapper.setProps({ thousand: '1345000' });
    expect(wrapper.find('input.num').element.value).toBe('1,345,000');
  });
});
