import React from 'react';
import './Goals.css';

const Goal = () => {
  return (
    <div>
      <img src='background.jpg' alt='background' className='background-img' />

      <h1 className='heading'>OUR GOALS</h1>



      <div className='container'>
        <div className='goal'>
          <h1>Provide Accurate Forecast</h1>
        </div>

        <div className='goal'>
          <h1>Improve Decision Making</h1>
        </div>


        <div className='goal'>
          <h1>Enhance Industrial Efficiency</h1>
        </div>

        <div className='goal'>
          <h1>Support Renewable Energy Adoption</h1>
        </div>

        <img src='goal.jpg' alt='goal' className='img' />
      </div>
    </div>
  );
}

export default Goal;