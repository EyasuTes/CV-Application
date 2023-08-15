import ComponentOne from './PersonalDetails.jsx'
import CV  from './CV.jsx'
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
        set:'off'
    })
    function setData(){
        setcvData({...cvData,set:'on'})
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
            setData={setData}
            formPersonal={formPersonal}
            />
            <ComponentTwo 
            formEducation={formEducation}
            />
            <ComponentThree 
            formExperience={formExperience}
            />
            
            </div>
            <div className='right-column'>
              <CV 
              cvData={cvData}
              formData1={formData1}
              formData2={formData2}
              formData3={formData3}
              />
            </div>
        </div>
    </>
    );
  }


  export default App;