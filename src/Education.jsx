import './App.css'
function ComponentTwo({formEducation, setarr, arrformData2, edudelete, formData2}) {

   function handleChange(event){
      formEducation(event)
   }
   function handleSubmit(event){
      event.preventDefault();
      
      setarr();
     
      
      
   }
   function handleDelete(id){
      edudelete(id)
   }
   return (
       <div className='component'>
         {arrformData2.map(current => (
          <div  key={current.id}>
            <div className='edusch'>
               <div className='schName'>{current.object.schoolName}</div>
               <div className='buttons'>
                  <button>Edit</button>
                  <button onClick={()=>handleDelete(current.id)}>Delete</button>
               </div>
            </div>
          </div>
         ))}
         <h1>Education</h1>
         <form className='formPersonal' onSubmit={handleSubmit}>
            <div>
               <label htmlFor="school">School Name</label>
               <input type="text" id='school' name="schoolName"  onChange={handleChange}/>
               
            </div>
            <div>
               <label htmlFor="degree">Email</label>
               <input type="text" id='degree' name="email" value={formData2.email} onChange={handleChange}/>
            </div>
            <div>
               <label htmlFor="eduLevel">Education Level</label>
               <input type="text" id='eduLevel' name="eduLevel" value={formData2.eduLevel} onChange={handleChange}/>
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
               <button type='submit' className='submit'>Add</button>
               
            </div>
         </form>
       </div>
   )
  }
export default ComponentTwo;