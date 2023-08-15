
function ComponentTwo({formEducation, setDataEducation}) {

   function handleChange(event){
      formEducation(event)
   }
   function handleSubmit(event){
      event.preventDefault();
      setDataEducation();
   }
   return (
       <div
       className='component'>
          
          <h1>Education</h1>
         <form className='formPersonal' onSubmit={handleSubmit}>
            <div>
               <label htmlFor="school">School Name</label>
               <input type="text" id='school' name="schoolName" onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="degree">Email</label>
               <input type="text" id='degree' name="email" onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="eduLevel">Education Level</label>
               <input type="text" id='eduLevel' name="eduLevel" onChange={handleChange}/>
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

            <div id='buttons'>
               <button className='submit'>Submit</button>
               <button className='edit'>Edit</button>
            </div>
         </form>
       </div>
   )
  }
export default ComponentTwo;