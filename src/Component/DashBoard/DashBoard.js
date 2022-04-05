import React, { useEffect, useState } from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, Tooltip, XAxis, YAxis } from 'recharts';

const DashBoard = () => {
    const [chart, setChart] = useState()
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return (
        <div>
            <div className='flex p-12'>
                <div>
                    <h1 className='text-4xl'>BarChart</h1>
                    <BarChart width={700} height={550} data={chart}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sell" fill="#333C83" />
                        <Bar dataKey="revenue" fill="#46244C" />
                    </BarChart>
                </div>
                <div>
                    <h1 className='text-4xl'>RadarChart</h1>
                    <RadarChart outerRadius={90} width={730} height={250} data={chart}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="month" />
                        <PolarRadiusAxis angle={30} domain={[0, 150]} />
                        <Radar name="revenue" dataKey="revenue" stroke="#46244C" fill="#46244C" fillOpacity={0.6} />
                        <Radar name="sell" dataKey="sell" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                        <Legend />
                    </RadarChart>
                </div>

            </div>
            <div>
                <h1 className='text-4xl'>ComposedChart</h1>
                <ComposedChart width={730} height={450} data={chart}>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="investment" barSize={50} fill="#413ea0" />
                    <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default DashBoard;