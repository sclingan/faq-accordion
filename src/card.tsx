import logo from '../public/illustration-woman-online-mobile.svg';



function Card() {
    return(
        <div>
        <header>
         <img className="img__logo" src={logo} alt=""></img>
        </header>
        <section>
            {/* <h1>FAQ</h1> */}
            <ul>
                <li>How many team members can I invite?</li>
                <li>You can invite up to 2 additional users on the Free plan. There is no limit on 
                    team members for the Premium plan.</li>
                <li>What is the maximum file upload size?</li>
                <li>No more than 2GB. All files in your account
                    must fit your allotted storage space.
                </li>
                <li>How do I reset my password?</li>
                <li>Click “Forgot password” from the login page or “Change password” from your profile page.
                    A reset link will be emailed to you.</li>
                <li>Can I cancel my subscription?</li>
                <li>Yes! Send us a message and we’ll process your request no questions asked.</li>
                <li>Do you provide additional support?</li>
                <li>Chat and email support is available 24/7. Phone lines are open during normal business hours.</li>
            </ul>
        </section>
        </div>
    )
};


export default Card;