import React from 'react';
import { render } from '@testing-library/react';
import { defineFeature, loadFeature } from 'jest-cucumber';
import Todo from './components/Todo';

const feature = loadFeature('../acceptance/todos.feature', {
  tagFilter: '@unit'
});

defineFeature(feature, scenario => {
  scenario('I can see a todo', ({ given, when, then }) => {
    let actual;

    given('the following todo is defined:', table => {
      const props = table[0];
      actual = render(<Todo {...props} />)
    });

    then('it renders correctly', () => {
      expect(actual).toMatchSnapshot();
    });
  })
});

/*
test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
 */
