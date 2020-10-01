/* eslint-disable prettier/prettier */
import React from 'react';
import CounterApp from './src/CounterApp';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  Button
} from "react-native";


const initialState = {
  counter: 0,
};



const Reducer = (state = initialState, action) => {
  console.log('fucntion fired', action.type)
  switch (action.type) {
    case 'INCREASE_COUNTER':
      return { counter: state.counter + 1 };
    case 'DECREASE_COUNTER':
      return { counter: state.counter - 1 };
  }
  return state;
}

const store = createStore(Reducer);


export default function App() {
  return (
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}

