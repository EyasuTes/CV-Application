import React from 'react';
import './App.css'
function CV({formData1, cvData, formData2, formData3}) {
  
    return (
      if(cvData.set==='on'){
      <div>
        <div className="CVheader" >
          <h1 >{formData1.fullName}</h1>
          <div>
            <h4>{formData1.email}</h4>
            <h4>{formData1.phone}</h4>
            <h4>{formData1.address}</h4>
          </div>
        </div>
      }
        <div className='aboutCon'>
          <h2 className='aboutMe'>About Me</h2>
          <div className='aboutDes'>{formData1.description}</div>


          <h2>Education</h2>
          <div className='edu'>
            <div className='edu1'>
              <div className='eduDates'>
                <div>{formData2.startDate} {' - '}</div>
                <div> {' - '} {formData2.endDate}</div>
              </div>
              <div> {formData2.location}</div>
              <div>{formData2.email}</div>
            </div>
            

            <div className='edu2'>
              <div className='bold'>{formData2.schoolName}</div>
              <div>{formData2.eduLevel}</div>
            </div>
          </div>

          <h2>Experience</h2>
          <div className='exp'>
            <div className='exp1'>
              <div>{formData3.startDate}{' -- '}{formData3.endDate}</div>
              <div>{formData3.location}</div>
              
            </div>
            
            <div className='exp2'>
              <div className='bold'>{formData3.company}</div>
              <div>{formData3.position}</div>
              <div>{formData3.description}</div>
            </div>
          </div>
          
          
          
          
        </div>
      </div>
    );
  
  
  
  
}

export default CV;