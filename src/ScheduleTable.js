import React from "react";

const ScheduleTable = ({ schedule }) => {
    return (
        <div className="max-w-4xl mx-auto mt-6">
            <h2 className="text-xl font-bold text-center mb-4">Repayment Schedule</h2>
            <table className="w-full border-collapse border border-gray-300 shadow-md rounded-lg">
                <thead>
                    <tr className="bg-blue-500 text-white">
                        <th className="p-2">#</th>
                        <th className="p-2">Payment Date</th>
                        <th className="p-2">EMI</th>
                        <th className="p-2">Principal</th>
                        <th className="p-2">Interest</th>
                        <th className="p-2">Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {schedule.map((row, index) => (
                        <tr key={index} className="text-center bg-gray-100 even:bg-white">
                            <td className="p-2">{row.installment_no}</td>
                            <td className="p-2">{row.payment_date}</td>
                            <td className="p-2">{row.emi}</td>
                            <td className="p-2">{row.principal}</td>
                            <td className="p-2">{row.interest}</td>
                            <td className="p-2">{row.balance}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleTable;
