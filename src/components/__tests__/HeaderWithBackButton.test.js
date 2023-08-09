import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import HeaderWithBackButton from '../nav/navbar';

// Mock the useNavigate hook
jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('HeaderWithBackButton component', () => {
  beforeEach(() => {
    useNavigate.mockClear();
  });

  it('should render correctly', () => {
    const { getByText, getByTestId } = render(<HeaderWithBackButton />);

    // Check if the title "Finance" is rendered
    const titleElement = getByText('Finance');
    expect(titleElement).toBeInTheDocument();

    // Check if the back button is rendered
    const backButton = getByTestId('back-button');
    expect(backButton).toBeInTheDocument();

    // Check if the microphone and cog icons are rendered
    const microphoneIcon = getByTestId('microphone-icon');
    const cogIcon = getByTestId('cog-icon');
    expect(microphoneIcon).toBeInTheDocument();
    expect(cogIcon).toBeInTheDocument();
  });

  it('should call useNavigate when back button is clicked', () => {
    const navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);

    const { getByTestId } = render(<HeaderWithBackButton />);

    const backButton = getByTestId('back-button');
    fireEvent.click(backButton);

    expect(navigateMock).toHaveBeenCalledWith(-1);
  });
});
