import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';

const App = () => {
  const [firstDropDown, setFirstDropDown] = useState('');
  const [secondDropdown, setSecondDropdown] = useState('');

  const options = {
    Fruits: ['Apple', 'Banana', 'Cherry'],
    Animals: ['Dog', 'Cat', 'Elephant'],
    Colors: ['Red', 'Green', 'Blue']
  };

  const handleFirstDropDownChange = (e) => {
    setFirstDropDown(e.target.value);
    setSecondDropdown(''); // Reset second dropdown
  };

  const handleSecondDropdownChange = (e) => {
    setSecondDropdown(e.target.value);
  };

  return (
    <Container>
      <Form>
        <Form.Group controlId="firstDropDown">
          <Form.Label>FirstDropDown</Form.Label>
          <Form.Control as="select" value={firstDropDown} onChange={handleFirstDropDownChange}>
            <option value="">Select an option</option>
            {Object.keys(options).map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="secondDropdown">
          <Form.Label>Second Dropdown</Form.Label>
          <Form.Control as="select" value={secondDropdown} onChange={handleSecondDropdownChange} disabled={!firstDropDown}>
            <option value="">Select an option</option>
            {firstDropDown && options[firstDropDown].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Form.Control>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default App;