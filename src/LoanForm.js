import React, { useState } from "react";

const LoanForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        disbursement_date: "",
        principal: "",
        tenure: "",
        emi_frequency: "monthly",
        interest_rate: "",
        moratorium_period: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Loan Details</h2>

            <div className="mb-4">
                <label className="block text-sm font-semibold">Disbursement Date</label>
                <input type="date" name="disbursement_date" value={formData.disbursement_date} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold">Principal Amount</label>
                <input type="number" name="principal" value={formData.principal} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold">Tenure (months)</label>
                <input type="number" name="tenure" value={formData.tenure} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold">EMI Frequency</label>
                <select name="emi_frequency" value={formData.emi_frequency} onChange={handleChange} className="w-full p-2 border rounded">
                    <option value="monthly">Monthly</option>
                    <option value="quarterly">Quarterly</option>
                </select>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold">Interest Rate (%)</label>
                <input type="number" name="interest_rate" value={formData.interest_rate} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-semibold">Moratorium Period (months)</label>
                <input type="number" name="moratorium_period" value={formData.moratorium_period} onChange={handleChange} className="w-full p-2 border rounded" required />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition">
                Generate Schedule
            </button>
        </form>
    );
};

export default LoanForm;
