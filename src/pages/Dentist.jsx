import React from 'react';
import {} from 'react-router-dom'

import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Registration from '../components/Registration'

const Dentist = () => {
    return ( 
      <>
        <div className='main-container'>
            <SideBar />
            <div className='auxiliar-container'>
                <NavBar title={"Dentista"} />
                <div className='central-container'>
                    <div className='header-central-container'>
                          <Registration />
                    </div>
                </div>
            </div>
        </div>
      </>      

    );
}
 
export default Dentist;