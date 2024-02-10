import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import MovieDataSlicer from '../toolkitSlice/MovieDataSlicer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const reducer = combineReducers({
  MovieDataSlicer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const toolkitStore = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(toolkitStore);
export default toolkitStore;
