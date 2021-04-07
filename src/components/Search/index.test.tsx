import { shallow } from 'enzyme';
import { Search } from '.';

describe('Search Component', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
