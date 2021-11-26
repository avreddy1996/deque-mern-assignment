import React, { useContext, useReducer, useState } from 'react';


import Store from './store/store';
import reducer from './store/reducer';

import style from './App.module.scss';
import CurrencyConverter from "./components/converter/CurrencyConverter";

const App = () => {
  const initialState = useContext(Store);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [formView, setFormView] = useState(false);
  const [edit, setEdit] = useState(false);

  const setView = () => setFormView(!formView);

  const closeForm = () => setFormView(false);

  const editItem = item => {
    setEdit(item);
    setFormView(true);
  };

  const clearEdit = () => {
    setEdit(false);
  }

  return (
    <Store.Provider value={{ state, dispatch }}>
      <div className={style.app}>
        <div className={style.todo}>
          <CurrencyConverter />
        </div>
      </div>
    </Store.Provider>
  );
}

export default App;
