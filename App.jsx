import React from 'react';
import Header from './src/AppLayout/Header';
import SearchSection from './src/LandingSections/SearchSection';
import CategoryCards from './src/LandingSections/CategoryCards';
import CollectionCards from './src/LandingSections/CollectionCards';
import AreasSection from './src/LandingSections/AreasSection';
import GetAppSection from './src/LandingSections/GetAppSection';
import Footer from './src/AppLayout/Footer';
import LandingPage from './src/LandingSections/LandingPage';

const App = () => {
    return (
        
        <>
            <Header />
                <LandingPage />
            <Footer />

        </>
    );
};

export default App;