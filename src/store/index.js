import { createContext } from 'react'

const defaultState = {
  num: 1,
};


const reducers = (state = defaultState, action) => {
  switch (action.type) {
    case 'test': {
      return state;
    }

    default: {
      return state;
    }
  }
}

const MainContext = createContext({});

export {
  MainContext as default,
  defaultState,
  reducers,
}