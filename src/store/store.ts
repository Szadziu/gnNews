import {configureStore} from '@reduxjs/toolkit';
import viewModeReducer from './slices/viewModeSlice';

const store = configureStore({
    reducer: {
        viewMode: viewModeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;