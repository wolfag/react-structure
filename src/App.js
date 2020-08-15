import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase';
import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header';
import NotFound from './components/NotFound';

const Photo = React.lazy(() => import('./features/Photo'));

// Config firebase
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
};
firebase.initializeApp(config);

function App(props) {
  const [productList, setProductList] = useState([]);
  const [user, setUser] = useState({});

  // firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged((user) => {
        console.log({ user });
        setUser(user);
      });
    return () => unregisterAuthObserver();
  }, []);

  return (
    <div className='photo-app'>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Redirect exact from='/' to='/photos' />
            <Route path='/photos' component={Photo} />
            <Route path='/sign-in' component={SignIn} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
