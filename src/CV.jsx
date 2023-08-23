import React from 'react';
import './App.css'
function CVpersonal({ formData1}) {
  
    return (
      <div >
        <div className="CVheader">
          <h1>{formData1.fullName}</h1>
          <div>
            <h4>{formData1.email}</h4>
            <h4>{formData1.phone}</h4>
            <h4>{formData1.address}</h4>
          </div>
        </div>

        <div className='aboutCon'>
          <h2 className='aboutMe'>About Me</h2>
          <p className='aboutDes'>{formData1.description}</p>
        </div>
      </div>
    );
  
}

function CVeducation({  arrformData2 }) {
  
    return (
      <div>
        <h2 className='headedu'>Education</h2>
        {arrformData2.map(current => (
          <div className='educon' key={current.id}>
            {console.log(arrformData2)}
            <div className='edu'>
              <div className='edu1'>
                <div className='eduDates'>
                  <div>
                    {current.object.startDate} - {current.object.endDate}
                  </div>
                  <div>{current.object.location}</div>
                </div>
                <div>{current.object.email}</div>
              </div>
              <div className='edu2'>
                <div className='bold'>{current.object.schoolName}</div>
                <div>{current.object.eduLevel}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
 
}

function CVexperience({  arrformData3 }) {
  
    return (
      <div>
        <h2 className='headexp'>Experience</h2>
        {arrformData3.map(current=>(
          <div className='expcon' key={current.id}>
          
          <div className='exp'>
            <div className='exp1'>
              <div>
                {current.object.startDate} -- {current.object.endDate}
              </div>
              <div>{current.object.location}</div>
            </div>

            <div className='exp2'>
              <div className='bold'>{current.object.company}</div>
              <div>{current.object.position}</div>
              <p >{current.object.description}</p>
            </div>
          </div>
        </div>
        ))}
        
      </div>
    );
  
}

export default CVpersonal;
export {CVeducation};
export {CVexperience};