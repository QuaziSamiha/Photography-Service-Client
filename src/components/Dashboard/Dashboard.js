import React from 'react';
import AddService from '../Admin/AddService/AddService';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div style={{marginTop: '200px'}}>
                <AddService />
            </div>
        </>
    );
};

export default Dashboard;