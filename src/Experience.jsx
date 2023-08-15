//import './App.css'
function ComponentThree({formExperience, setDataExperience}) {

   function handleChange(event){
      formExperience(event)
   }
   function handleSubmit(event){
      event.preventDefault();
      setDataExperience();
   }
  
    return (
      <div
       className='component'>
          
         <h1>Experience</h1>
         <form className='formPersonal' onSubmit={handleSubmit}>
            <div>
               <label htmlFor="company">Company Name</label>
               <input type="text" id='company' name="company" onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="position">Position Title</label>
               <input type="text" id='position' name="position" onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="startDate">Start Date</label>
               <input type="date" id='startDate' name="startDate" onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="endDate">End Date</label>
               <input type="date" id='endDate' name="endDate" onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="location">Location</label>
               <input type="text" id='location' name="location" onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="description">Description</label>
               <textarea id="description" name="description" rows="4" cols="50" onChange={handleChange}></textarea>
            </div>
            <div id='buttons'>
               <button className='submit'>Submit</button>
               <button className='edit'>Edit</button>
            </div>
         </form>
      </div>
    )
  } 
  export default ComponentThree;