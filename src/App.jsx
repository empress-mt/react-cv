import { useState } from 'react'
import PersonalInformation from './components/PersonalInformation';
import CV from './components/CV';
import Education from './components/Education';
import Experience from './components/Experience';

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [education, setEducation] = useState([]);
  const [experience, setExperience] = useState([]);

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
      <Experience experience={experience} setExperience={setExperience} />
      <CV
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone}
        education={education}
        experience={experience} />
    </>
  )
}

export default App
