function PersonalInformation({ firstName, lastName, email, phone, setFirstName, setLastName, setEmail, setPhone }) {

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name </label>
                    <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name </label>
                    <input type="text" name="lastName" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email </label>
                    <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="phone">Phone </label>
                    <input type="text" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
            </form>
        </div>
    )

}

export default PersonalInformation;