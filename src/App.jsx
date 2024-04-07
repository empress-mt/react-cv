import { useState } from 'react'
import PersonalInformation from './components/PersonalInformation';
import CV from './components/CV';
import Education from './components/Education';


function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([]);

  return (
    <>
      <PersonalInformation
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        setFirstName={setFirstName}
        setLastName={setLastName}
        setEmail={setEmail}
        setPhone={setPhone} />
      <Education education={education} setEducation={setEducation} />
      <CV
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        education={education} />
    </>
  )
}

export default App
