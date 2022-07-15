import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import ArrowRD from '../../components/ArrowRD';
import Button from '../../components/Button';
import Content from '../../components/Fonts/Content';
import ClothCard from '../../components/Catalog/ClothCard';

const CatalogPrice = () => {
  const API_URL = "https://fakestoreapi.com/products/"

  const [ data, setData ] = useState([]);
  const [ fetchError, setFetchError ] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        const listItems = await response.json();
        console.log(listItems);
        setData(listItems)
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
    }
    setTimeout(() => {
      (async () => await fetchData())();
    },2000)
  }, [])

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
            <div className="flex justify-center py-12 px-5">
              <div className="grid grid-cols-2 gap-8">
                {/* WOMEN CLOTH */}
                {data.map((item) => (
                  item.category === "women's clothing" && 
                  <ClothCard 
                    imageLink={item.image} 
                    productName={item.title}
                    price={item.price}
                    /> 
                ))}
                {/* MEN CLOTH */}
                {data.map((item) => (
                  item.category === "men's clothing" && 
                  <ClothCard 
                    imageLink={item.image} 
                    productName={item.title}
                    price={item.price}
                    /> 
                ))}
                </div>
            </div>
        </div>
    </div>
  );
}

export default CatalogPrice;
