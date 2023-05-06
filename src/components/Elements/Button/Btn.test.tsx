import { render } from '@testing-library/react';
import { Button } from './Button';

test('「HI Im Button」', () => {
  const { getByText } = render(<Button label='HI Im Button' />);
  expect(getByText('HI Im Button')).toBeInTheDocument();
});
