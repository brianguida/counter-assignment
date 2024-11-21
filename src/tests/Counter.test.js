import {render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  const incrementButton = screen.getByText('+');
  fireEvent.click(incrementButton); 
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  const decrementButton = screen.getByText('-');
  fireEvent.click(decrementButton);
  const countValue = screen.getByTestId('count');
  expect(countValue).toHaveTextContent('-1');
});
