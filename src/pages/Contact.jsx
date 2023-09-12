import { useState } from 'react';

import { validateEmail, validateName } from "../utils/helpers";

export default function Contact() {

  const [nameField, setNameField] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'nameField') {
      setNameField(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Please check your email address!');
      return;
    }
    if (!validateName(nameField)) {
      setErrorMessage('Please check your name!');
      return;
    }
    if (!message) {
      setErrorMessage('You must enter a message!');
      return;
    }

      setErrorMessage('Form has been submitted!');
      setEmail('');
      setNameField('');
      setMessage('');
  };

  return (
    <>
      <div className="container d-flex flex-column justify-content-center text-center p-4">
        <h3>Contact: </h3>

          <form className="form p-4" onSubmit={handleFormSubmit}>
            <input className="m-2 w-50" value={nameField} name="nameField" onChange={handleInputChange} type="text" placeholder="name" autoComplete="off" required/>
            <br></br>
            <input className="m-2 w-50" value={email} name="email" onChange={handleInputChange} type="email" placeholder="email" autoComplete="off" required/>
            <br></br>
            <textarea className="m-2 w-50" value={message} name="message" onChange={handleInputChange} type="text" placeholder="message" autoComplete="off" required/>
            <br></br>
            <button type="submit">Submit</button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>

    </>
  );
}
