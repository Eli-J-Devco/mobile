import {render} from '@testing-library/react-native';
import LoginForm from './components/LoginForm';

test('basic test', () => {
  render(<LoginForm />);
  expect(screen.getAllByRole('button', {name: 'start'})).toBeOnTheScreen();
});
