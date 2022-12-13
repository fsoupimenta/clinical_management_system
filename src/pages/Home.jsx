import React from 'react';
import {} from 'react-router-dom'

import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import CentralContainer from '../components/CentralContainer'

const Home = () => {
    return ( 
      <>
        <div className='main-container'>
            <SideBar />
            <div className='auxiliar-container'>
                <NavBar title={"Home"} />
                <CentralContainer button_title={""} />
            </div>
        </div>
      </>      

    );
}
 
export default Home;