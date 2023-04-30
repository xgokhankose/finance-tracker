import { configureStore } from '@reduxjs/toolkit';
import walletReducer from './WalletReducer';

export const store = configureStore({
    reducer: {
        wallet: walletReducer,
    },
});

