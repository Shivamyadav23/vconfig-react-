import React, { useState, useEffect } from 'react';
import { Form, Container, Row, Col } from 'react-bootstrap';

// Data structure with default quantity values
const data = {
  Small: {
    quantity: 8,
    Maruti: {
      Swift: ['VXI', 'LXI', 'ZXI'],
    },
    Hyundai: {
      'Grand i10': ['Prime', 'Kapp Era', 'Magna'],
    },
  },
  Compact: {
    quantity: 6,
    Honda: {
      Civic: ['Civic V', 'Civic ZX Diesel'],
    },
    Tata: {
      Nexon: ['Smart(O) Petrol 5 Speed MT', 'Smart Plus 1.2 Petrol 5 Speed MT'],
    },
  },
  Sedan: {
    quantity: 5,
    Hyundai: {
      Verna: ['SX Opt IVT Petrol', 'SX OPT Turbo DCT DT'],
    },
    Honda: {
      City: ['ZX CVT', 'V Elegant'],
    },
  },
  SUV: {
    quantity: 3,
    Mahindra: {
      Scorpio: ['S11 7CC', 'S9 Seater'],
      Bolero: ['B4', 'B6'],
    },
    Tata: {
      Punch: ['Adventure Petrol 5 Speed MT', 'Pure Petrol 5 Speed MT'],
    },
  },
  Luxury: {
    quantity: 2,
    'Land Rover': {
      Defender: ['2.0 1110 SE (Petrol)', '2.0 90 HSE (Petrol)'],
    },
    Audi: {
      Q5: ['Premium Plus', 'Bold Edition', 'Q5 Technology'],
      A6: ['Audi A6 45 TFSI Technology WO Matrix(Petrol)', 'Audi A6 45 TFSI Premium Plus (Petrol)'],
    },
  },
};

const DependentDropdowns = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedManufacturer, setSelectedManufacturer] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    // Set default quantity when class segment changes
    if (selectedClass) {
      setQuantity(data[selectedClass].quantity);
    }
  }, [selectedClass]);

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
    setSelectedManufacturer('');
    setSelectedModel('');
  };

  const handleManufacturerChange = (e) => {
    setSelectedManufacturer(e.target.value);
    setSelectedModel('');
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(Number(e.target.value));
  };

  return (
    <Container>
      <Form>
        <Row>
          <Col>
            <Form.Group controlId="classSegment">
              <Form.Label>Class Segment</Form.Label>
              <Form.Control as="select" value={selectedClass} onChange={handleClassChange}>
                <option value="">Select a Class Segment</option>
                {Object.keys(data).map((classSegment) => (
                  <option key={classSegment} value={classSegment}>
                    {classSegment}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="manufacturer">
              <Form.Label>Manufacturer</Form.Label>
              <Form.Control
                as="select"
                value={selectedManufacturer}
                onChange={handleManufacturerChange}
                disabled={!selectedClass}
              >
                <option value="">Select a Manufacturer</option>
                {selectedClass &&
                  Object.keys(data[selectedClass]).filter(key => key !== 'quantity').map((manufacturer) => (
                    <option key={manufacturer} value={manufacturer}>
                      {manufacturer}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="model">
              <Form.Label>Model & Sub Model</Form.Label>
              <Form.Control
                as="select"
                value={selectedModel}
                onChange={handleModelChange}
                disabled={!selectedManufacturer}
              >
                <option value="">Select a Model & Sub Model</option>
                {selectedClass &&
                  selectedManufacturer &&
                  Object.keys(data[selectedClass][selectedManufacturer]).map((model) =>
                    data[selectedClass][selectedManufacturer][model].map((subModel) => (
                      <option key={`${model} - ${subModel}`} value={`${model} - ${subModel}`}>
                        {`${model} - ${subModel}`}
                      </option>
                    ))
                  )}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                min={data[selectedClass]?.quantity || 0}
                disabled={!selectedClass}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default DependentDropdowns;
