import React from 'react';
import AddTitleButton from './components/AddTitleButton';
import Button from './components/Button';
import InputSearch from './components/InputSearch';


const App = () => {
   
  return ( 
    <>
      <div>
      <AddTitleButton />
      </div>
      <div>
        <InputSearch />
        <Button />
      </div>
    </>      

   );
}
 
export default App;