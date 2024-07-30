import React, { useState } from 'react';
import { Container, Row, Col, Table, Dropdown, DropdownButton } from 'react-bootstrap';

const DefaultConfiguration = () => {
  const [activeSection, setActiveSection] = useState('Dimensions & Capacity');

  const sections = {
    'Dimensions & Capacity': [
      { label: 'Length', value: '3985 mm' },
      { label: 'Width', value: '1820 mm' },
      { label: 'Height', value: '1855 mm' },
      { label: 'Seating Capacity', value: '4' },
      { label: 'Ground Clearance Unladen', value: '226 mm' },
      { label: 'Wheel Base', value: '2450 mm' },
      { label: 'Approach Angle', value: '41.2' },
      { label: 'Break-over Angle', value: '26.2' },
      { label: 'Departure Angle', value: '36' },
      { label: 'No. of Doors', value: '3' }
    ],
    'Engine & Transmission': [
      { label: 'Engine Type', value: 'mHawk 130 CRDe' },
      { label: 'Displacement', value: '2184 cc' },
      { label: 'Max Power', value: '130.07 bhp @ 3750 rpm' },
      { label: 'Max Torque', value: '300 Nm @ 1600-2800 rpm' },
      { label: 'No. of Cylinders', value: '4' },
      { label: 'Valves Per Cylinder', value: '4' },
      { label: 'Turbo Charger', value: 'Yes' },
      { label: 'Transmission Type', value: 'Automatic' },
      { label: 'Gearbox', value: '6-Speed AT' },
      { label: 'Drive Type', value: '4WD' }
    ]
  };

  return (
    <Container style={{ backgroundColor: 'white', padding: '20px', borderRadius: '8px' }}>
      <Row>
        <Col md={8}>
          <DropdownButton id="dropdown-basic-button" title={activeSection}>
            {Object.keys(sections).map(section => (
              <Dropdown.Item key={section} onClick={() => setActiveSection(section)}>
                {section}
              </Dropdown.Item>
            ))}
          </DropdownButton>
          <Table bordered className="mt-3">
            <tbody>
              {sections[activeSection].map((spec, index) => (
                <tr key={index}>
                  <td>{spec.label}</td>
                  <td>{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col md={4}>
          <div className="text-center">
            <h2>Car Images</h2>
            <div style={{ border: '1px solid #ccc', padding: '20px', minHeight: '300px' }}>
              <img src="/images/BMW Wallpaper.jpeg" alt="Bike" className="img-fluid mb-2" style={{ width: '100%', marginBottom: '10px' }} />
              {/* Add more images as needed */}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DefaultConfiguration;
