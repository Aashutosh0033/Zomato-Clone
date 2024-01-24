import React from 'react';
import SearchSection from './SearchSection';
import CategoryCards from './CategoryCards';
import CollectionCards from './CollectionCards';
import GetAppSection from './GetAppSection';
import AreasSection from './AreasSection';

const LandingPage =()=>{
    return (
        <>
        <SearchSection />
        <CategoryCards />
        <CollectionCards />
        <GetAppSection />
        <AreasSection />
        </>
    );
};

export default LandingPage;