import ComponentOne from './PersonalDetails.jsx'
import CVpersonal  from './CV.jsx'
import { CVeducation } from './CV.jsx'
import { CVexperience } from './CV.jsx'
import ComponentTwo from './Education.jsx'
import ComponentThree from './Experience.jsx'
import { useState } from 'react'
import './App.css'
function App() {
    //const value2='value2'
    const[formData1, setFormData1]=useState({
        fullName:'',
        email:'',
        
        phone:'',
        address:'',
        description:''
     })
    const[formData2, setFormData2]=useState({
        schoolName:'',
        email:'',
        eduLevel:'',
        startDate:'',
        endDate:'',
        location:''

    })
    console.log(formData2)
    const [arrformData2, setarrformData2]=useState([])
    function setarr(){
        setarrformData2(current=>{
            return[
                ...current, 
                {id:crypto.randomUUID(), object:formData2 }
            ]
        })
        
        setFormData2({
            schoolName:'',
            email:'',
            startDate:'',
            endDate:'',
            location:''
    
        })
       
    }
    console.log(arrformData2)
    const[formData3, setFormData3]=useState({
        company:'',
        position:'',
        startDate:'',
        endDate:'',
        location:'',
        description:''
    })
    const [arrformData3, setarrformData3]=useState([])
    function setarr1(){
        setarrformData3(current=>{
            return[
                ...current, 
                {id:crypto.randomUUID(), object:formData3 }
            ]
        })
        
        
    }
    
   
   
    
    function formPersonal(event){
        const name=event.target.name;
        const value=event.target.value;
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
    function edudelete(id){
        setarrformData2(current=> {
            return current.filter(inputs => inputs.id !== id)
        })
    }
    function expdelete(id){
        setarrformData3(current=> {
            return current.filter(inputs => inputs.id !== id)
        })
    }
    
    return (
    <>
        <h1 className='header'>CV Creating Application</h1>
        <div className='container'>
            
            <div className='left-column'>
            <ComponentOne 
           
            formPersonal={formPersonal}
            />
            <ComponentTwo 
            setarr={setarr}
            arrformData2={arrformData2}
            formEducation={formEducation}
            edudelete={edudelete}
            formData2={formData2}
            
            />
            <ComponentThree 
            setarr1={setarr1}
            expdelete={expdelete}
            arrformData3={arrformData3}
            formExperience={formExperience}
            />
            
            </div>
            <div className='right-column'>
              <CVpersonal
             
              formData1={formData1}
              />
              <CVeducation 
              
              
              arrformData2={arrformData2}
              />
              <CVexperience 
             
              
              arrformData3={arrformData3}
              />
            </div>
        </div>
    </>
    );
  }


  export default App;