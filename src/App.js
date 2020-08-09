import React from 'react';
import GlobalReset from './GlobalReset'
import PageTitle from './components/PageTitle/PageTitle'
import Toggle from './components/Toggle/Toggle'


function App() {
  return (
    <div>
      <PageTitle text="Our Pricing" />
      <Toggle/>
      <GlobalReset/>
    </div>
  );
}

export default App;
