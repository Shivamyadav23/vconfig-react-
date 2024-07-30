import React, { useState } from 'react';

const CompanyDetailsForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    line1: '',
    line2: '',
    area: '',
    city: '',
    state: '',
    pinCode: '',
    holdingType: '',
    authorisedPersonName: '',
    designation: '',
    tel: '',
    fax: '',
    mobile: '',
    vatNo: '',
    taxPanNo: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Company Name:</label>
        <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
      </div>
      <div>
        <label>Line 1:</label>
        <input type="text" name="line1" value={formData.line1} onChange={handleChange} />
      </div>
      <div>
        <label>Line 2:</label>
        <input type="text" name="line2" value={formData.line2} onChange={handleChange} />
      </div>
      <div>
        <label>Area:</label>
        <input type="text" name="area" value={formData.area} onChange={handleChange} />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} />
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} />
      </div>
      <div>
        <label>Pin Code:</label>
        <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
      </div>
      <div>
        <label>Holding Type:</label>
        <input type="text" name="holdingType" value={formData.holdingType} onChange={handleChange} />
      </div>
      <div>
        <label>Authorised Person Name:</label>
        <input type="text" name="authorisedPersonName" value={formData.authorisedPersonName} onChange={handleChange} />
      </div>
      <div>
        <label>Designation:</label>
        <input type="text" name="designation" value={formData.designation} onChange={handleChange} />
      </div>
      <div>
        <label>Telephone:</label>
        <input type="text" name="tel" value={formData.tel} onChange={handleChange} />
      </div>
      <div>
        <label>Fax:</label>
        <input type="text" name="fax" value={formData.fax} onChange={handleChange} />
      </div>
      <div>
        <label>Mobile:</label>
        <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} />
      </div>
      <div>
        <label>VAT Number:</label>
        <input type="text" name="vatNo" value={formData.vatNo} onChange={handleChange} />
      </div>
      <div>
        <label>Tax PAN Number:</label>
        <input type="text" name="taxPanNo" value={formData.taxPanNo} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CompanyDetailsForm;
