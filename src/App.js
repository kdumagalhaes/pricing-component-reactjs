import React from 'react';
import GlobalReset from './GlobalReset';
import PageTitle from './components/PageTitle/PageTitle';
import Toggle from './components/Toggle/Toggle';
import CardRow from './components/CardRow/CardRow';

function App() {
  return (
    <div>
      <PageTitle text="Our Pricing" />
      <Toggle />
      <CardRow />
      <GlobalReset />
    </div>
  );
}

export default App;
