import React from 'react'
import '../Styles/Contact.css';
const Contact = () => {
  return (
    <div className='contact'> 
<div className='leftSide'>

</div>
<div className='rightSide'>
<h1>Contact Us</h1>
<form id='contact-form' method='POST'>
<label htmlFor='name'>Full Nmae</label>
<input type='text' placeholder='Enter Your Name...' name='name'/>
<label htmlFor='email'>Email</label>
<input type='email' placeholder='Enter Your Email...' name='email'/>
<label htmlFor='message'>Message</label>
<textarea 
rows='6'
placeholder='Enter Message'
name='message'
required
>
</textarea>
<button type='submit'>Send Message</button>
</form>
</div>
    </div>
  )
}

export default Contact