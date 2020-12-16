let StoreModule: any;

if (process.env.NODE_ENV === 'production') {
  StoreModule = require('./configureStore.prod').default;
} else {
  StoreModule = require('./configureStore.dev').default;
}

export default StoreModule;