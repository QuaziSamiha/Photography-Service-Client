import React from 'react';
import AddService from '../Admin/AddService/AddService';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <AddService />
        </div>
    );
};

export default Dashboard;