import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

test('renders app component', () => {
  //to avoid any errors because of router used in component `MemoryRouter` added to the test case
  render(<App />, {wrapper: MemoryRouter});
});
