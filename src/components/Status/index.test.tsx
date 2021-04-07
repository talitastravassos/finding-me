import { shallow } from 'enzyme';
import { Status } from '.';
import { ILocation } from '../../types/IPFindContext.types';
import { mockLocation } from '../../__test__/mock';

describe('Status Component', () => {
  it('should render the component', () => {
    const wrapper = shallow(<Status status={mockLocation as ILocation} />);

    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.find('div')).toHaveLength(4);
  });
});
