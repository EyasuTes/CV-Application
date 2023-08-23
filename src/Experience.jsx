import './App.css'
function ComponentThree({formExperience,  setarr1, arrformData3, expdelete}) {

   function handleChange(event){
      formExperience(event)
   }
   function handleSubmit(event){
      event.preventDefault();
      
      setarr1()
   }
   function handleDelete(id){
      expdelete(id)
   }
  
    return (
      <div className='component'>
          {arrformData3.map(current => (
          <div  key={current.id}>
            <div className='edusch'>
               <div className='schName'>{current.object.company}</div>
               <div className='buttons'>
                  {console.log(arrformData3)}
                  <button>Edit</button>
                  <button onClick={()=>handleDelete(current.id)}>Delete</button>
               </div>
            </div>
          </div>
         ))}
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
               <button type='submit' className='submit'>Add</button>
               
            </div>
         </form>
      </div>
    )
  } 
  export default ComponentThree;