import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem (){
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars2.githubusercontent.com/u/39709032?s=460&u=ca18bc9085f2c61d79aabe9a17c42db219c46162&v=4" alt="Matheus Heck"/>
            <div>
                <strong> Matheus Heck</strong>
                <span>Coding Classes</span>
            </div>
        </header>

        <p>
            Online bootcamped, love to code and discover new features.
            <br/><br/>
            Brazilian and living in Berlin, is looking for an opportunity in IT and 
            Software Development front, back-end or FullStack.
        </p>
    


        <footer>
            <p>
                 Price per hour
                <strong>??,??€</strong>
             </p>
            <button type="button">
                <img src={whatsappIcon} alt="Whatsapp Icon"/>
                Contact
            </button>

        </footer>
        </article>
    )
}

export default TeacherItem;