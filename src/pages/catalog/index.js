import Header from '../../components/Header';
import React from 'react';
import ArrowRD from '../../components/ArrowRD';
import Button from '../../components/Button';
import Content from '../../components/Fonts/Content';
import Navbar from '../../components/Navbar/Navbar';

const CatalogPage = () => {
  return (
    <div>
      <Navbar/>
        <div className="py-24 gap-4 min-h-screen">
            <ArrowRD />
            <div className="flex justify-center">
              <div className="max-w-[60%] py-8">
                <h1 className="text-4xl font-medium tracking-none leading-none">MEET the MEN'S COLLECTION</h1>
              </div>
            </div>
            <div className="pt-44">
              <div className="text-xs text-moreSmoke py-4">
                <Content preset="kenscott">
                  Complimentary 2-3 Day Shipping
                </Content>
              </div>
              <Button preset="shopnow" href="/catalog/price" />
            </div>
        </div>
    </div>
  );
}

export default CatalogPage;
