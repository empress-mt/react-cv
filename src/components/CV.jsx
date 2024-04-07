export default function CV({
    firstName,
    lastName,
    email,
    phone,
    education,
    experience
}) {

    return (
        <div>
            <h1>{firstName}</h1>
            <h1>{lastName}</h1>
            <h1>{email}</h1>
            <h1>{phone}</h1>
            <div>
                {education.map(ed => {
                    return <p key={ed.id}>{JSON.stringify(ed)}</p>
                })}
            </div>
            <div>
                {experience.map(exp => {
                    return <p key={exp.id}>{JSON.stringify(exp)}</p>
                })}
            </div>
        </div>
    )
}