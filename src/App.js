import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [mItems, setMItem] = useState(items);
  // const [catagory, setCaragory] = useState([]);
  const filterItems = (catagory) => {
    if (catagory === "all") {
      setMItem(items);
      return;
    }
    const newItems = items.filter(item => {
      return item.category === catagory;
    });
    setMItem(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Resturant</h2>
          <div className="underline"></div>
        </div>
        <Categories filter={filterItems} />
        <Menu items={mItems} />
      </section>
    </main>
  );
}

export default App;
