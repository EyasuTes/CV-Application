import ComponentOne from './PersonalDetails.jsx'
import CVpersonal  from './CV.jsx'
import { CVeducation } from './CV.jsx'
import { CVexperience } from './CV.jsx'
import ComponentTwo from './Education.jsx'
import ComponentThree from './Experience.jsx'
import { useState } from 'react'

function App() {
    //const value2='value2'
    const[formData1, setFormData1]=useState({
        fullName:'',
        email:'',
        eduLevel:'',
        phone:'',
        address:'',
        description:''
     })
    const[formData2, setFormData2]=useState({
        SchoolName:'',
        email:'',
        startDate:'',
        endDate:'',
        location:''

    })
    const[formData3, setFormData3]=useState({
        company:'',
        position:'',
        startDate:'',
        endDate:'',
        location:'',
        description:''
    })
   
    const [cvData,setcvData]=useState({
        setPersonal:'off',
        setEducation:'off',
        setExperience:'off'
    })
    function setDataPersonal(){
        setcvData({...cvData,setPersonal:'on'})
    }
    function setDataEducation(){
        setcvData({...cvData,setEducation:'on'})
    }
    function setDataExperience(){
        setcvData({...cvData,setExperience:'on'})
    }
    function formPersonal(event){
        const name=event.target.name;
        const value=event.target.value;
        //setPerson({...person, [name]: value})
        setFormData1({...formData1, [name] : value })
    }
    function formEducation(event){
        const name=event.target.name;
        const value=event.target.value;
        setFormData2({...formData2, [name] : value})
    }
    function formExperience(event){
        const name=event.target.name;
        const value=event.target.value;
        setFormData3({...formData3, [name] : value})
    }
    
    return (
    <>
        <h1 className='header'>CV Creating Application</h1>
        <div className='container'>
            
            <div className='left-column'>
            <ComponentOne 
            setDataPersonal={setDataPersonal}
            formPersonal={formPersonal}
            />
            <ComponentTwo 
            setDataEducation={setDataEducation}
            formEducation={formEducation}
            />
            <ComponentThree 
            setDataExperience={setDataExperience}
            formExperience={formExperience}
            />
            
            </div>
            <div className='right-column'>
              <CVpersonal
              cvData={cvData}
              formData1={formData1}
              />
              <CVeducation 
              cvData={cvData}
              formData2={formData2}
              />
              <CVexperience 
              cvData={cvData}
              formData3={formData3}
              />
            </div>
        </div>
    </>
    );
  }


  export default App;