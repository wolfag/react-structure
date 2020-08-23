import { unwrapResult } from '@reduxjs/toolkit';
import productApi from 'api/productApi';
import { getMe } from 'app/userSlice';
import SignIn from 'features/Auth/pages/SignIn';
import firebase from 'firebase';
import React, { Suspense, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const params = {
          _page: 1,
          _limit: 10,
        };
        const response = await productApi.getAll(params);
        setProductList(response.data);
      } catch (error) {
        console.log('Failed to fetch product list', error);
      }
    };
    fetchProductList();
  }, []);

  // firebase auth changed
  useEffect(() => {
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user) => {
        console.log({ user });
        setUser(user);
        try {
          const action = getMe();
          const actionResult = await dispatch(action);

          // use unwrapResult to catch error
          const currentUser = unwrapResult(actionResult);
          console.log({ currentUser });
        } catch (error) {
          console.log({ error });
        }
      });

    return () => unregisterAuthObserver();
  }, [dispatch]);

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
