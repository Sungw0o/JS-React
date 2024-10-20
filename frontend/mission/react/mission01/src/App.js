import React from 'react';
import BudgetApp from './components/BudgetApp';
import GlobalStyles from './styles/GlobalStyles'; 
import Header from './components/Header';

function App() {
  return (
    <>
      <GlobalStyles />  
      <Header />
      <BudgetApp />
    </>
  );
}

export default App;
