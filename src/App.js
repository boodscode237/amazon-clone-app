import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';


function App() {
  const [{ user }, dispatch] = useStateValue();
  // useEffect 
  // Piece of code with run based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
    return () => {
      // Any cleanup operation goes here
      unsubscribe();
    }
  }, [])

  console.log('USER IS>>>>', user);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;

// const firebaseConfig = {
//   apiKey: "AIzaSyBtchIwLSnVkco8KgaBvVrPUm46dao94Qw",
//   authDomain: "clone-app-57ae4.firebaseapp.com",
//   databaseURL: "https://clone-app-57ae4.firebaseio.com",
//   projectId: "clone-app-57ae4",
//   storageBucket: "clone-app-57ae4.appspot.com",
//   messagingSenderId: "748185125092",
//   appId: "1:748185125092:web:cbebfe65b06f5c1b7d2cf1",
//   measurementId: "G-9YB2KNHB7P"
// };