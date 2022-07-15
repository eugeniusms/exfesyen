import Header from '../../components/Header';
import React from 'react';
import HomepageCard from '../../components/Homepage/HomepageCard';
import FirstImage from './images/sweater01.png';

const Homepage = () => {
  return (
    <div>
        <div className="py-24 gap-4 min-h-screen">
            <HomepageCard 
                category="Sweater"
                firstImage={FirstImage}
            />
        </div>
    </div>
  );
}

export default Homepage;
