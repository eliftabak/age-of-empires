import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {render} from '@testing-library/react';
import Header from '../../components/header';

it('renders header correctly', () => {
  const homeElement = 'Home'
  const unitsElement = 'Units'
  render(<Header>{homeElement} , {unitsElement}</Header>, {wrapper: MemoryRouter})
});