import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { FormInput } from './FormInput';

describe('FormInput', () => {
  it('renders input with label', () => {
    render(<FormInput name="email" label="Email" value="" onChange={() => {}} />);

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    render(<FormInput name="email" label="Email" placeholder="Введите email" value="" onChange={() => {}} />);

    expect(screen.getByPlaceholderText('Введите email')).toBeInTheDocument();
  });

  it('calls onChange when typing', () => {
    const handleChange = vi.fn();
    render(<FormInput name="email" label="Email" value="" onChange={handleChange} />);

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'test@test.com' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error message', () => {
    render(
      <FormInput
        name="email"
        label="Email"
        value=""
        onChange={() => {}}
        error="Это обязательное поле"
      />
    );

    expect(screen.getByText('Это обязательное поле')).toBeInTheDocument();
  });

  it('renders icon button if icon provided', () => {
    const action = vi.fn();
    render(
      <FormInput
        name="test"
        label="Test"
        value=""
        onChange={() => {}}
        icon="/icon.svg"
        action={action}
      />
    );

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(action).toHaveBeenCalled();
  });
});
