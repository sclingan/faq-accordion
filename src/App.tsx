import { useState } from 'react'
import './App.css'
import logo from '../public/illustration-woman-online-mobile.svg';
import arrow_icon from '../public/icon-arrow-down.svg';

function App() {

  return (
    <main>
      <div className="div__card">
         <img className="img__logo" src={logo} alt=""></img>
        <h1>FAQ</h1> 
        <div className="div__card_question">
          <p>How many team members can I invite?</p>
       </div>
       <button className="btn__accordion"><img src={arrow_icon} alt=""></img></button>

       <div className="div__card_answer">
         <p> You can invite up to 2 additional users on the Free plan. There is no limit on 
          team members for the Premium plan.
          </p>
      </div>
      <div className="div__card_question">
          <p>What is the maximum file upload size?</p>
      </div>
      <button className="btn__accordion"><img src={arrow_icon} alt=""></img></button>

      <div className="div__card_answer">
          <p>No more than 2GB. All files in your account must fit your allotted storage space.
            </p>
      </div>
      <div className="div__card_question">
         <p>How do I reset my password?</p>
      </div>
      <button className="btn__accordion"><img src={arrow_icon} alt=""></img></button>

      <div className="div__card_answer">
         <p>Click “Forgot password” from the login page or “Change password” from your profile page.
         A reset link will be emailed to you.
         </p>
      </div>
      <div className="div__card_question">
         <p>Can I cancel my subscription?</p>
      </div>
      <button className="btn__accordion"><img src={arrow_icon} alt=""></img></button>

      <div className="div__card_answer">
         <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
      </div>
      <div className="div__card_question">
         <p>Do you provide additional support?</p>
      </div>
      <button className="btn__accordion"><img src={arrow_icon} alt=""></img></button>

      <div className="div__card_answer">
        <p> Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
      </div>
    </div>
    <footer>
     <div className="attribution">
      Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
      Coded by <a href="#">Scott Clingan</a>.
     </div>
    </footer>
    </main>
  )
}

export default App
