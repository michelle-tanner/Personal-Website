import '../css/ContactMe.css'

function ContactMe() {
    return (
        <>
        <div className="box">
            <div className="contact">
                <a href="https://linkedin.com/in/michelletanner05" target="_blank"><img src="src/assets/icons/linkedin.svg" alt="img"></img>LinkedIn</a>
                michelletanner05
           </div>
           <div className="contact">
                <a href="https://github.com/michelle-tanner" target="_blank"><img src="src/assets/icons/github.svg" alt="img"></img>Github</a>
                michelle-tanner
           </div>
           <div className="contact">
                <a href="mailto:michellemt0518@gmail.com" target="_blank"><img src="src/assets/icons/mail.svg" alt="img"></img>Email Me!</a>
                michellemt0518@gmail.com
           </div>
        </div>
        </>
    )
}

export default ContactMe