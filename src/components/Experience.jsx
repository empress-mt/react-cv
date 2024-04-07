import { useState } from "react";

export default function Experience({ experience, setExperience }) {

    const [jobTitle, setJobTitle] = useState('');
    const [employer, setEmployer] = useState('');
    const [startDate, setStartDate] = useState(Date());
    const [endDate, setEndDate] = useState(Date());
    const [description, setDescription] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
        const exp = {
            id: Date.now(),
            jobTitle,
            employer,
            startDate,
            endDate,
            description
        };

        setExperience([...experience, exp]);
        clearFields();
    }

    function clearFields() {
        setJobTitle('');
        setEmployer('');
        setStartDate(Date());
        setEndDate(Date());
        setDescription('');
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="jobTitle">Job title </label>
                    <input type="text" name="jobTitle" id="jobTitle" onChange={(e) => setJobTitle(e.target.value)} value={jobTitle} />
                </div>
                <div>
                    <label htmlFor="employer">Employer </label>
                    <input type="text" name="employer" id="employer" onChange={(e) => setEmployer(e.target.value)} value={employer} />
                </div>
                <div>
                    <label htmlFor="startDate">Start date </label>
                    <input type="date" name="startDate" id="startDate" onChange={(e) => setStartDate(e.target.value)} value={startDate} />
                </div>
                <div>
                    <label htmlFor="endDate">End date </label>
                    <input type="date" name="endDate" id="endDate" onChange={(e) => setEndDate(e.target.value)} value={endDate} />
                </div>
                <div>
                    <label htmlFor="description">Description </label>
                    <input type="text" name="description" id="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    )

}