import React from "react";
import { render, screen, fireEvent, getByTestId, getByText } from "@testing-library/react";
import ContactForm from "./ContactForm";

test("renders ContactForm without crashing", async () => {

    //Arrange
    render(<ContactForm />);

    // screen.debug();

    //Act
   const firstName = screen.getByLabelText(/first name/i);
   const lastName = screen.getByLabelText(/last name/i);
   const email = screen.getByLabelText(/email/i);
   const message = screen.getByLabelText(/message/i);

   const submit = screen.getByRole('button');
   const error = screen.queryByText(/looks like there was an error:/i);

   fireEvent.change(firstName, { target: { value: 'Angelyn' } });
   fireEvent.change(lastName, { target: { value: 'L' } });
    // expect(error).toBeInTheDocument();
   fireEvent.change(email, { target: { value: 'angelynaliem@gmail.com' } });
   fireEvent.change(message, { target: { value: '' } });

   fireEvent.click(submit);

    //Assert

    expect(screen.getByText(/first name*/i)).toBeInTheDocument();

    expect(screen.getByPlaceholderText(/edd/i)).toBeInTheDocument();

    expect(screen.getByRole('button')).toBeInTheDocument();
 
    expect(await screen.findByText(/Angelyn/i)).toBeInTheDocument();
    // expect(firstName).toHaveLength(3);

    // expect(await screen.findByText(/L/i)).toBeInTheDocument();
    expect(await screen.findByText(/angelynaliem@gmail.com/i)).toBeInTheDocument();


    
})

