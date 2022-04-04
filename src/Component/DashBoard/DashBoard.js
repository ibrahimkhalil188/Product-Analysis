import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [chart, setChart] = useState()
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <div className='align-middle'>
            <BarChart width={1000} height={550} data={chart}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sell" fill="#333C83" />
                <Bar dataKey="revenue" fill="#46244C" />
            </BarChart>
            <div>

            </div>
        </div>
    );
};

export default DashBoard;