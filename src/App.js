import React from 'react'
import Footer from './Components/Footer';
import Header from './Components/Header';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import StartPage from './Components/StartPage'
import AuthPage from './Components/AuthPage'
import './styles/App.css'
import ChatPage from './Components/ChatPage';
import {Provider} from 'react-redux'
import store from './BLL/store';

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={StartPage} />
          <Route exact path="/auth" component={AuthPage} />
          <Route exact path="/chat" component={ChatPage} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
