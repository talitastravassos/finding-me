import { shallow } from 'enzyme';
import { Header } from '.';

describe('Header Component', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
