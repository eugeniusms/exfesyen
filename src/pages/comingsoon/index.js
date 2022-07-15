import Header from '../../components/Header';
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const ComingSoon = () => {
  return (
    <div>
      <Navbar/>
        <div className="flex justify-center py-24 px-6 gap-4 min-h-screen items-center">
          <Header>
            Coming Soon!
          </Header>
        </div>
    </div>
  );
}

export default ComingSoon;
