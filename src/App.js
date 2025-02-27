import React, { useState } from "react";
import axios from "axios";
import LoanForm from "./LoanForm";
import ScheduleTable from "./ScheduleTable";

const App = () => {
    const [schedule, setSchedule] = useState([]);

    const handleSubmit = async (formData) => {
        try {
            const response = await axios.post("https://loan-scheduler-backend.onrender.com/generate_schedule", formData);
            setSchedule(response.data.schedule);
        } catch (error) {
            console.error("Error fetching schedule:", error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Loan Repayment Schedule Generator</h1>
            <LoanForm onSubmit={handleSubmit} />
            {schedule.length > 0 && <ScheduleTable schedule={schedule} />}
        </div>
    );
};

export default App;
