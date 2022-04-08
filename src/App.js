import './App.css';
import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import Home from './Home';
import Stores from './Stores'
import items from './data'
import Categories from './Categories';
import Menu from './Menu';
import logo from './logo.png'
import { AiFillHome } from 'react-icons/ai'
import { BiFoodMenu, BiStore } from 'react-icons/bi'

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items)
  const [activeCategory, setActiveCategory] = useState("")
  const [categories] = useState(allCategories) 

  const filterItems = (category) => {
    setActiveCategory(category)
    if (category === 'all') {
      setMenuItems(items)
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
  }

  let navigate = useNavigate(); 
  const logoClick = () =>{ 
    let path = `/home`; 
    navigate(path);
  }

  return (
    <main>
      <section className='menu-section'>
        <div className='title'>
          <img src={logo} alt="logo" className='logo' onClick={logoClick}/>
          <h2 id='brand-name'>The Boba Store</h2>
          <nav className='nav-bar'>
            <Link className='home' to='/home'>Home<AiFillHome /></Link>
            <Link className='menu' to='/menu'>Menu<BiFoodMenu /></Link>
            <Link className='stores' to='/stores'>Our Stores<BiStore /></Link>
          </nav>
          {/* <div className='underline'></div> */}
        </div>

        <Routes>
          <Route path='/menu' element={<>
          <Categories 
            categories={categories}
            activeCategory={activeCategory}
            filterItems={filterItems}
            />

          <Menu 
            items={menuItems}
            />
          </>
          } />
          <Route path='/home' element={
          <Home />
          } />
          <Route path='/stores' element={
          <Stores />
          } />
        </Routes>
      </section>
    </main>
    


  );
}

export default App;


