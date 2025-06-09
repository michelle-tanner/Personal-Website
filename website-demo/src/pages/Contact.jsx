import ContactMe from '../components/ContactMe.jsx'

function Contact( {linkedin, github, email} ) {
    return (
        <>
        {/* <h3>Contact Page</h3> */}
        {/* <p>nothing here currently...</p> */}
        <ContactMe linkedin={linkedin} github={github} email={email}/>
        </>
    )

}
export default Contact