import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Header } from '.';

describe('Header Component', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('render correctly header component', () => {
    const HeaderComponent = renderer.create(<Header />).toJSON();
    expect(HeaderComponent).toMatchSnapshot();
  });
});
