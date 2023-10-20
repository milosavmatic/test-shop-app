import MemoizedProductList from '@/app/components/categories/ProductList';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('ProductList', () => {
  it('does not re-render when products do not change', () => {
    const products = [
      { id: 1, title: 'Product 1', price: 10 },
      { id: 2, title: 'Product 2', price: 20 },
      { id: 3, title: 'Product 3', price: 30 },
    ];

    const { getByText, rerender } = render(<MemoizedProductList products={products} />);

    expect(getByText('Products List')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('$10')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
    expect(getByText('$20')).toBeInTheDocument();
    expect(getByText('Product 3')).toBeInTheDocument();
    expect(getByText('$30')).toBeInTheDocument();

    act(() => {
      rerender(<MemoizedProductList products={products} />);
    });

    expect(getByText('Products List')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('$10')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
    expect(getByText('$20')).toBeInTheDocument();
    expect(getByText('Product 3')).toBeInTheDocument();
    expect(getByText('$30')).toBeInTheDocument();
  });
});