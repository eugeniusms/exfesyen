import Header from '../../components/Header';
import React from 'react';
import ArrowRD from '../../components/ArrowRD';
import Button from '../../components/Button';
import Content from '../../components/Fonts/Content';

const CatalogPrice = () => {
  return (
    <div>
        <div className="gap-4 min-h-screen">
            {/* READY TO WEAR */}
            <Header preset="slash">
              Ready to Wear
            </Header>
            <div className="flex justify-between">
              <Button preset="sortby-left">SORT BY</Button>
              <Button preset="sortby-right">FILTERS</Button>
            </div>
        </div>
    </div>
  );
}

export default CatalogPrice;
