import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Dashboard = () => {
    const [metrics, setMetrics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMetrics = async () => {
            try {
                const token = localStorage.getItem('authToken');
                const res = await axios.get('http://localhost:8080/api/dashboard/metrics', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setMetrics(res.data.data);
            } catch (err) {
                console.error('Error fetching metrics:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchMetrics();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!metrics) return <div>No data</div>;

    const usersByPositionData = metrics.usersByPosition.map(u => ({
        name: u.position,
        count: u.count
    }));

    const ageDistributionData = Object.entries(metrics.ageDistribution).map(([key, value]) => ({
        name: key,
        value
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div className="container mt-4">
            <h2>Dashboard</h2>

            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card text-center p-3">
                        <h5>Total Users</h5>
                        <h3>{metrics.totalUsers}</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center p-3">
                        <h5>Total Positions</h5>
                        <h3>{metrics.totalPositions}</h3>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card text-center p-3">
                        <h5>Average Age</h5>
                        <h3>{metrics.averageAge}</h3>
                    </div>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-6">
                    <h5>Users by Position</h5>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={usersByPositionData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#8884d8" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-6">
                    <h5>Age Distribution</h5>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie 
                                data={ageDistributionData} 
                                dataKey="value" 
                                nameKey="name" 
                                cx="50%" 
                                cy="50%" 
                                outerRadius={100} 
                                fill="#82ca9d" 
                                label
                            >
                                {ageDistributionData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;