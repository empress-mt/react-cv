import { useState } from 'react'
import PersonalInformation from './components/PersonalInformation';
import CV from './components/CV';


function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

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
      <CV
        firstName={firstName}
        lastName={lastName}
        email={email}
        phone={phone} />
    </>
  )
}

export default App
