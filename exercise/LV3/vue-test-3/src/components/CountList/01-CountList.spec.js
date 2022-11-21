import { mount } from '@vue/test-utils';
import CountList from '@/components/CountList';
import { ref } from 'vue';

describe('CountList.vue', () => {
  const data = {
    props: {
      count: 100,
    },
    setup(props) {
      const listIdx = ref(555);

      return { listIdx, props };
    },
  };

  it('should be data and props', () => {
    const wrapper = mount(CountList, data);

    expect(wrapper.find('h1').text()).toBe('目前的人數是555人');
    expect(wrapper.find('h2').text()).toBe('存款有100元');
  });
});
