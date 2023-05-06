import { render } from '@testing-library/react';
import { Btn } from './Btn';

test('「Hello Test」が描画されている', () => {
  const { getByText } = render(<Btn />);
  expect(getByText('Btn')).toBeInTheDocument();
});
