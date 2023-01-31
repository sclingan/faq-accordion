import { useState } from 'react'
import './App.css'
import logo from '../public/illustration-woman-online-mobile.svg';
import arrow_icon from '../public/icon-arrow-down.svg';
import './accordion.js';
import './card.tsx';

function App() {

  return (
    <main>
      <div className="div__card">
         {/* <img className="img__logo" src={logo} alt=""></img> */}
        <h1>FAQ</h1> 
        {/* <div className="div__card_question" id='question_1'>
          <p>How many team members can I invite?</p>
       </div>
       <button className="btn__accordion" aria-expanded="false"><img src={arrow_icon} alt="" id='icon_1'></img></button>
       <div className="div__card_answer" id='answer_1'>
         <p> You can invite up to 2 additional users on the Free plan. There is no limit on 
          team members for the Premium plan.
          </p>
      </div>
      <div className="div__card_question" id='question_2'>
          <p>What is the maximum file upload size?</p>
      </div>
      <button className="btn__accordion" aria-expanded='false'><img src={arrow_icon} alt="" id='icon_2'></img></button>

      <div className="div__card_answer">
          <p>No more than 2GB. All files in your account must fit your allotted storage space.
            </p>
      </div>
      <div className="div__card_question" id='question_3'>
         <p>How do I reset my password?</p>
      </div>
      <button className="btn__accordion" aria-expanded='false'><img src={arrow_icon} alt="" id='icon_3'></img></button>

      <div className="div__card_answer">
         <p>Click “Forgot password” from the login page or “Change password” from your profile page.
         A reset link will be emailed to you.
         </p>
      </div>
      <div className="div__card_question" id='question_4'>
         <p>Can I cancel my subscription?</p>
      </div>
      <button className="btn__accordion" aria-expanded='false'><img src={arrow_icon} alt="" id='icon_4'></img></button>

      <div className="div__card_answer">
         <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
      </div>
      <div className="div__card_question" id='question_5'>
         <p>Do you provide additional support?</p>
      </div>
      <button className="btn__accordion" aria-expanded='false'><img src={arrow_icon} alt="" id='icon_5'></img></button>

      <div className="div__card_answer">
        <p> Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
      </div> */}
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
