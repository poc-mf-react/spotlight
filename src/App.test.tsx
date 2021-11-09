import { render } from '@testing-library/react';
import { App } from './App';

describe('<App />', () => {
  it('should be in the document', () => {
    const { getByText } = render(<App name="Testapp" />);
    expect(getByText(/Empréstimo/i)).toBeInTheDocument();
  });
});
