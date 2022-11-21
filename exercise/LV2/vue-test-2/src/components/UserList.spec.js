import { shallowMount } from '@vue/test-utils';
import UserList from '@/components/UserList.vue';

describe('UserList', () => {
  it('should be dom', () => {
    const wrapper = shallowMount(UserList);

    // console.log(wrapper.findAll('.user_list').at(0));
    expect(wrapper.findAll('.user_list').length).toBe(6);
  });
});
