import React from "react";

import CheckoutForm from "./CheckoutForm";
import { render, fireEvent } from "@testing-library/react";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    // Act
    const greeting = getByText(/Checkout Form/i);
    // Assert
    expect(greeting).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByText } = render(<CheckoutForm />);
    // Act
   
    const button = getByText('Checkout');
    fireEvent.click(button);
    const greeting = getByText(/You have ordered some plants! Woo-hoo/i);
    // Assert
    expect(greeting).toBeInTheDocument();
});
