import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });
Object.defineProperty(window, 'scroll', { value: () => {}, writable: true });
Object.defineProperty(window, 'open', { value: () => {}, writable: true });