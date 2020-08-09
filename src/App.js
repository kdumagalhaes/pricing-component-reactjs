import React, {useState} from 'react';
import GlobalReset from './GlobalReset';
import PageTitle from './components/PageTitle/PageTitle';
import Toggle from './components/Toggle/Toggle';
import CardRow from './components/CardRow/CardRow';

function App() {
  const [currentPrice, setPrice] = useState(false);

  return (
    <div>
      <PageTitle text="Our Pricing" />
      <Toggle currentPrice={currentPrice} setPrice={setPrice} />
      <CardRow currentPrice={currentPrice} setPrice={setPrice}/>
      <GlobalReset />
    </div>
  );
}

export default App;
