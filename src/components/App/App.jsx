import React, { useState } from 'react';
import AeroForm from '../AeroForm/AeroForm';
import AeroTable from '../AeroTable/AeroTable';


function App() {

  return (
    <div>
      <h1>Redux Airport</h1>
      <AeroForm />
      <AeroTable />
      <button>Add Airline</button>
      <table>{/* Airlines should be listed here */}</table>
    </div>
  );
}

export default App;
