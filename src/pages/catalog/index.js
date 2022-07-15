import Header from '../../components/Header';
import React from 'react';
import ArrowRD from '../../components/ArrowRD';
import Button from '../../components/Button';
import Content from '../../components/Fonts/Content';

const CatalogPage = () => {
  return (
    <div>
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
              <Button preset="shopnow"/>
            </div>
            {/* READY TO WEAR */}
            <Header preset="slash">
              Ready to Wear
            </Header>
            <div className="flex justify-between">
              <Button preset="sortby">SORT BY</Button>
              <Button preset="sortby">FILTERS</Button>
            </div>
        </div>
    </div>
  );
}

export default CatalogPage;
