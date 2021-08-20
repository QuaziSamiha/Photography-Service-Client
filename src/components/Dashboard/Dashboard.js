import React from 'react';
import AdminSidebar from '../Admin/AdminSidebar/AdminSidebar';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div>
                <AdminSidebar />
            </div>
            <Footer />
        </>
    );
};

export default Dashboard;