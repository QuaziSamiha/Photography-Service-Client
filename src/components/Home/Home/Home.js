import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div style={{ marginTop: '200px' }}>
                <h3>this is home</h3>
            </div>
            <Footer />
        </>
    );
};

export default Home;