import { shallow } from 'enzyme';
import Map from '.';

describe('Map Component', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Map location={[37.78298, -122.38969]} />);

    expect(wrapper.exists()).toBeTruthy();
  });
});
