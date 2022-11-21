import { mount } from '@vue/test-utils';
import Combination from '@/components/Combination';

describe('Combination.vue', () => {
  it('test emit', async () => {
    const wrapper = mount(Combination);
    await wrapper.setProps({ thousand: 1000000 });
    await wrapper.find('button').trigger('click');

    // console.log(wrapper.emitted('Combination'));
    expect(wrapper.emitted('Combination')[0][0]).toBe('1,000,000');
  });
});
