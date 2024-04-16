import React, { useState } from 'react';

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        city: '',
        state: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can perform any action with the form data, such as submitting it to a server
        console.log(formData);
      };
      var cities = [10,20,30,40]
      let states = [{name:'Noida',code:201301},{name:'Delhi',code:110066}]
      
      
  return (
    <div className="container">
      <h1>New Registeration {cities}</h1>
      <h2> {states[0].name}</h2>
        
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group row mt-2">
          <label htmlFor="name" className="col-sm-2"><b>Name:</b></label>
         <div className="col-sm-5">
         <input type="text" placeholder="Enter Your Name" className="form-control " id="name" name="name" value={formData.name}
           onChange={handleChange} />
         </div>
          
        </div>
        <div className="form-group row mt-3">
          <label htmlFor="email" className="col-sm-2 control-label"><b>Email:</b></label>
          <div className="col-sm-5">
             <input type="email" placeholder="Enter Your Email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
        </div>
        <div className="form-group row mt-3">
          <label htmlFor="phoneNumber" className="control-label col-sm-2"><b>Phone Number:</b></label>
          
             <div className="col-sm-5">
             <input type="text" placeholder="Enter Your Phone Number" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
         
             </div>
        </div>
        <div className="form-group row mt-3">
          <label htmlFor="city" className="control-label col-sm-2"><b>City:</b></label>
          <div className="col-sm-5">
          <input type="text" className="form-control" placeholder="Enter Your City " id="city" name="city" value={formData.city} onChange={handleChange} />
            </div>
        </div>
        <div className="form-group row mt-3">
          <label htmlFor="state" className=" control-label col-sm-2"><b>State:</b></label>
          <div className="col-sm-5">
          <input type="text" placeholder="Enter Your State Detail" className="form-control" id="state" name="state" value={formData.state} onChange={handleChange} />
        </div>
        </div>
        <div className='form-group row mt-3'>
        <label htmlFor="state" className=" control-label col-sm-2"></label>
            <button type="submit" className="col-sm-1 btn btn-primary">Submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default Register;