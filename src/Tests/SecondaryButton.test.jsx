import { render, screen, fireEvent } from '@testing-library/react';
import SecondaryButton from '../components/SecondaryButton';

test('renders SecondaryButton and handles click', () => {
  const handleClick = vi.fn();
  render(<SecondaryButton label="Criar conta" onClick={handleClick} />);

  const button = screen.getByText('Criar conta');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
