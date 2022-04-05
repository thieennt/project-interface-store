import React from 'react';
import './App.css';
import tw from 'twin.macro';
import styled from 'styled-components';
import Header from './components/Header';
import SearchComponent from './components/Container/Search';

const AppContainer = styled.div`
  ${tw`
    w-full
    h-full
    flex
    flex-col
  `}
`

function App() {
  return (
    <AppContainer>
      <Header></Header>
      <SearchComponent></SearchComponent>
    </AppContainer>
  );
}

export default App;
