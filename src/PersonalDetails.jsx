/* eslint-disable react/prop-types */
import { useState } from 'react'
import CV from './CV';
import React from 'react';
import './App.css'

function ComponentOne({ formPersonal}) {
   
   
   

   function handleChange(event){
      formPersonal(event);
   }
   
   function handleSubmit(event){
      event.preventDefault()
      // resetForm()
      
   }
   return (
      <div className='component'>
         
         <h1>Personal Details</h1>
         <form className='formPersonal' onSubmit={handleSubmit} >
         <div>
            <label htmlFor="name">Full Name</label>
            <input type="text" id='name' name='fullName' onChange={handleChange}/>
         </div>
         <div>
            <label htmlFor="email">Email</label>
            <input type="email" id='email' name='email' onChange={handleChange}/>
         </div>
         <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id='phone' name='phone' onChange={handleChange}/>
         </div>
         <div>
            <label htmlFor="address">address</label>
            <input type="text" id='address' name='address' onChange={handleChange} />
         </div>
         <div>
            <label htmlFor="description">About</label>
            <textarea id="description" name="description" rows="4" cols="50" onChange={handleChange}></textarea>
         </div>
         <div id='buttons'>
            <button type='submit' className='submit'>Add</button>
            
         </div>
         
         </form>
        
         
        
      </div>
  )
} 


export default ComponentOne;

