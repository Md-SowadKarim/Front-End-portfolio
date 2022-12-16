import React,{useRef} from 'react'
import FormStyle from "./FormStyle.css"
import emailjs from '@emailjs/browser';

const Form = () => {
  const form = useRef();
  const handleSubmit=(e)=>{
    e.preventDefault();

    emailjs.sendForm('service_vzaakgl', 'template_7ikhedo', e.target, 'CuNVvcN9DsWaPdSOa')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <label>Your Name</label>
            <input type="text" name="user_name"  placeholder='please input your name' required></input>
            <label>Email</label>
            <input type="email" name="user_email" placeholder=' please input your email ' required></input>
            <label>Subject</label>
            <input type="text" name="subject"  placeholder=' please input your subject here' required></input>
            <label>Message</label>
            <textarea  rows="6" name="message" placeholder="Type your text here " />
            <button type='submit' value="Send" className='btn'>Submit</button>
        </form>
      
    </div>
  )
}

export default Form
