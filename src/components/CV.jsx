export default function CV({
    firstName,
    lastName,
    email,
    phone,
    education
}) {

    return (
        <div>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <div>
                {education.map(ed => {
                    return <p>{JSON.stringify(ed)}</p>
                })}
            </div>
        </div>
    )
}