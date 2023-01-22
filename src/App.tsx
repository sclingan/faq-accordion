import { useState } from 'react'
import './App.css'

function App() {

  return (
    <main>
      <div className="div__card">
        <h1>FAQ</h1> 
        <div className="div__card_question">
          How many team members can I invite?
       </div>
       <div className="div__card_answer">
          You can invite up to 2 additional users on the Free plan. There is no limit on 
          team members for the Premium plan.
      </div>
      <div className="div__card_question">
          What is the maximum file upload size?
      </div>
      <div className="div__card_answer">
          No more than 2GB. All files in your account must fit your allotted storage space.
      </div>
      <div className="div__card_question">
         How do I reset my password?
      </div>
      <div className="div__card_answer">
         Click “Forgot password” from the login page or “Change password” from your profile page.
         A reset link will be emailed to you.
      </div>
      <div className="div__card_question">
         Can I cancel my subscription?
      </div>
      <div className="div__card_answer">
         Yes! Send us a message and we’ll process your request no questions asked.
      </div>
      <div className="div__card_question">
         Do you provide additional support?
      </div>
      <div className="div__card_answer">
         Chat and email support is available 24/7. Phone lines are open during normal business hours.
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
