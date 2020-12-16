import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagaMonitor from '@redux-saga/simple-saga-monitor';
import rootReducer from '../reducers';

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  return {
    ...createStore(
      rootReducer,
      compose(
        applyMiddleware(sagaMiddleware),
      ),
    ),
    runSaga: sagaMiddleware.run,
  };
}
