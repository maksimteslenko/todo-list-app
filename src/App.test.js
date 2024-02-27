/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the main heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText(/To-Do List/i);
  expect(headingElement).toBeInTheDocument();
});

test('adds a task to the list', () => {
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputElement = getByPlaceholderText(/Add a new task/i);
  const addButtonElement = getByText(/Add Task/i);

  // Add a task
  fireEvent.change(inputElement, { target: { value: 'Task 1' } });
  fireEvent.click(addButtonElement);

  // Check if the task is added to the list
  const taskElement = getByText(/Task 1/i);
  expect(taskElement).toBeInTheDocument();
});