import React, { useReducer } from "react";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import MainContext, { defaultState, reducers  } from '@/store/index';
import ErrorBoundary from '@/components/ErrorBoundary';
import Home from "./Home";

function App() {
  const [store, dispatch] = useReducer(reducers, defaultState);

  return (
    <ErrorBoundary>
      <MainContext.Provider value={{store, dispatch }}>
          <HashRouter>
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
          </HashRouter>
      </MainContext.Provider>
    </ErrorBoundary>
  )
}

export default App;
