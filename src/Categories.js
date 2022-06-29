import React from 'react';
import items from "./data";
const Categories = ({ filter }) => {
  const uniqueCatagory = ["all", ...new Set(items.map(item =>
     item.category
  ))];
  console.log(uniqueCatagory);
  return (
    <div className='btn-container'>
      {uniqueCatagory.map(catagory => {
        return(<button className='filter-btn' onClick={()=>{filter(catagory);}}>{catagory}</button>)
      })}
    </div>
  );
};

export default Categories;
