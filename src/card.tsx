import logo from '../public/illustration-woman-online-mobile.svg';
import arrow_icon from '../public/icon-arrow-down.svg';



function Card() {
    return(
        <div>
        <header>
          <img className="img__logo" src={logo} alt=""></img>
        </header>
        <section>
            <ul>
                <li>
                    <div className='div__card_question'>
                        <p>How many team members can I invite?</p>
                    </div>
                </li>
                <button className="btn__accordion" aria-expanded='false'><img src={arrow_icon} alt="" id='icon_2'></img></button>
                <li>
                    <div className='div__card_answer' id="answer_1">
                        <p>You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
                    </div>
                </li>
                <li>
                    <div className='div__card_question'>
                        <p>What is the maximum file upload size?</p>
                    </div>
                </li>
                <button className="btn__accordion" aria-expanded='false'><img src={arrow_icon} alt="" id='icon_2'></img></button>
                <li>
                    <div className='div__card_answer' id='answer_2'>
                        <p>No more than 2GB. All files in your account must fit your allotted storage space.</p>
                    </div>
                </li>
                <li>
                    <div className='div__card_question'>
                        <p>How do I reset my password?</p>
                    </div>
                </li>
                <button className="btn__accordion" aria-expanded='false'><img src={arrow_icon} alt="" id='icon_2'></img></button>
                <li>
                    <div className='div__card_answer' id='answer_3'>
                        <p>Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.</p>
                    </div>
                </li>
                <li>
                    <div className='div__card_question'>
                        <p>Can I cancel my subscription?</p>
                    </div>
                </li>
                <button className="btn__accordion" aria-expanded='false'><img src={arrow_icon} alt="" id='icon_2'></img></button>
                <li>
                    <div className='div__card_answer' id='answer_4'>
                        <p>Yes! Send us a message and we’ll process your request no questions asked.</p>
                    </div>
                </li>
                <li>
                    <div className='div__card_question'>
                        <p>Do you provide additional support?</p>
                    </div>
                </li>
                <button className="btn__accordion" aria-expanded='false'><img src={arrow_icon} alt="" id='icon_2'></img></button>
                <li>
                    <div className='div__card_answer' id='answer_5'>
                        <p>Chat and email support is available 24/7. Phone lines are open during normal business hours.</p>
                    </div>
                </li>


            </ul>
        </section>
        </div>
    )
};


export default Card;