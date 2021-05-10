import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import React, { useReducer } from 'react';
import styled from 'styled-components';
import {
  boardHistory,
  BoardHistoryContext,
} from './components/provider/ContextB';
import './App.css';
import PlayScreen from './routes/PlayScreen';
import StartScreen from './routes/StartScreen';
import theme from './theme';
// import ballReducer from './components/reducer/ballReducer';
const ballReducer = (ballCnt, action) => {
  switch (action.type) {
    case 'S':
      return { ...ballCnt, S: ballCnt.S + 1 };
    case 'B':
      return { ...ballCnt, B: ballCnt.B + 1 };
    case 'O':
      return { ...ballCnt, O: ballCnt.O + 1 };
  }
};
function App() {
  const [ballCnt, dispatch] = useReducer(ballReducer, boardHistory);
  const { Provider } = BoardHistoryContext;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <AppDiv>
            <Route path='/' exact>
              <StartScreen />
            </Route>
            <Provider value={{ ballCnt, dispatch }}>
              <Route path='/play-screen'>
                <PlayScreen />
              </Route>
            </Provider>
          </AppDiv>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

const AppDiv = styled.div`
  margin: 50px auto;
  max-width: 1440px;
`;
const GlobalStyle = createGlobalStyle`
* {

  padding:0; 
  margin:0;
}

body{
  box-sizing:border-box;
  background-color:black;
}

ol, ul {
  list-style: none;
}
`;

export default App;
