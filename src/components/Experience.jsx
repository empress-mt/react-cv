import { useState } from "react";

export default function Experience({ experience, setExperience }) {

    const [jobTitle, setJobTitle] = useState('');
    const [employer, setEmployer] = useState('');
    const [startDate, setStartDate] = useState(Date());
    const [endDate, setEndDate] = useState(Date());
    const [description, setDescription] = useState('');

    function handleFormSubmit(e) {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleFormSubmit}>

            </form>
        </div>
    )

}