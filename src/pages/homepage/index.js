import Header from '../../components/Header';
import React from 'react';
import HomepageCard from '../../components/Homepage/HomepageCard';
import FirstImage from './images/sweater01.png';
import SecondImage from './images/hem01.png';

const Homepage = () => {
  return (
    <div>
        <div className="py-24 gap-4 min-h-screen">
            <HomepageCard 
                category="Sweater"
                firstName="Cassie"
                firstImage={FirstImage}
                secondTitle="Ken Scott print Exfes Horsebit shoulder bag"
                secondContent="Ken Scott was an American fashion designer who resided in Milan in the '60s and '70s where he created his colorful patterned fabrics and collections."
                secondImage={SecondImage}
            />
        </div>
    </div>
  );
}

export default Homepage;
