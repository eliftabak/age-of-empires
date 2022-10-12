import units from './reducers/reducers';
import sagas from './sagas/sagas';
import createSagaMiddleware from '@redux-saga/core';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: units,
  middleware: [sagaMiddleware],
});

const rootReducer = combineReducers({
  units: units,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

sagaMiddleware.run(sagas);

export { store };