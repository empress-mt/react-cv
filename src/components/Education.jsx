import { useState } from "react";

export default function Education({ education, setEducation }) {
    const [schoolName, setSchoolName] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState(Date());
    const [endDate, setEndDate] = useState(Date());

    function handleFormSubmit(e) {
        e.preventDefault();
        const edu = {
            id: Date.now(),
            schoolName,
            degree,
            startDate,
            endDate
        }

        setEducation([...education, edu]);
        console.log(education);
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="schoolName">School name </label>
                    <input type="text" name="schoolName" id="schoolName" onChange={(e) => setSchoolName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="degree">Degree </label>
                    <input type="text" name="degree" id="degree" onChange={(e) => setDegree(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="startDate">Start date </label>
                    <input type="date" name="startDate" id="startDate" onChange={(e) => setStartDate(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="endDate">End date </label>
                    <input type="date" name="endDate" id="endDate" onChange={(e) => setEndDate(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )

}