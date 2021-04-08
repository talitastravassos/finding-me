import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Search } from '.';

describe('Search Component', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Search />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('render correctly search component', () => {
    const SearchComponent = renderer.create(<Search />).toJSON();
    expect(SearchComponent).toMatchSnapshot();
  });
});
