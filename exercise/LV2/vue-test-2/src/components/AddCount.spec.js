import { shallowMount } from '@vue/test-utils';
import AddCount from '@/components/AddCount.vue';

describe('AddCount', () => {
  it('test 1', () => {
    const wrapper = shallowMount(AddCount);

    // console.log(wrapper.find('.add-btn'));

    expect(wrapper.find('.add-btn-error').exists()).toBe(false);
  });
});
