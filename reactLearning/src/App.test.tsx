import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import ConditionalRendering from './learningTopics/conditionalRendering';

test('renders learn react link', () => {
  render(<ConditionalRendering />);
  const linkElement = screen.getByTestId('FalseCond');
  expect(linkElement).toBeInTheDocument();
});
