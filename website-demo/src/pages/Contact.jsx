import ContactMe from '../components/ContactMe.jsx'

function Contact( {linkedin, github, email} ) {
    return (
        <>
        <ContactMe linkedin={linkedin} github={github} email={email}/>
        </>
    )

}
export default Contact