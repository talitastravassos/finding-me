import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Map from '.';

describe('Map Component', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Map location={[37.78298, -122.38969]} />);

    expect(wrapper.exists()).toBeTruthy();
  });

  it('render correctly map component', () => {
    const MapComponent = renderer
      .create(<Map location={[37.78298, -122.38969]} />)
      .toJSON();
    expect(MapComponent).toMatchSnapshot();
  });
});
