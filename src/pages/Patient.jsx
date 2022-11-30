import React from 'react';
import {} from 'react-router-dom'

import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import CentralContainer from '../components/CentralContainer'

const Patient = () => {
    return ( 
      <>
        <div className='container'>
            <SideBar />
            <div className='auxiliar-container'>
                <NavBar title={"Patient"} />
                <CentralContainer button_title={"Patient"}/>
            </div>
        </div>
      </>      

    );
}
 
export default Patient;