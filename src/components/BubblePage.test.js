import React from 'react";
import { render, screen } from '@testing-library/react';
import BubblePage from './BubblePage';
import App from '../App';

test('Renders BubblePage without errors', () => {
  render(<App />);
});

test('Fetches data and renders the bubbles on mounting', () => {
  import { fetchBubbles as mockFetchBubbles } from '../helpers/fetchBubbles';
  jest.mock('../helpers/fetchBubbles');

  const newBubbles = [
    { code: { hex: '#f0f8ff' }, color: 'aliceblue', id: 1 },
    { code: { hex: '#99ddbc' }, color: 'limegreen', id: 2 },
  ];

  test('Fetches data and renders the bubbles', async () => {
    mockFetchBubbles.mockResolvedValue(newBubbles);
    render(<BubblePage />);

    const bubbles = screen.findByText(/bubble/i);
    expect(await bubbles).toBeInTheDocument();
  });

//Task List
//1. Setup test for basic rendering of component
//2. Setup test for initial rendering of bubbles on loading