import { render, screen, fireEvent } from '@testing-library/react';
import PrimaryButton from '../components/PrimaryButton';

test('renders PrimaryButton with label and handles click', () => {
  const handleClick = vi.fn(); // usando vitest
  render(<PrimaryButton label="Entrar" onClick={handleClick} />);

  const button = screen.getByText('Entrar');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
