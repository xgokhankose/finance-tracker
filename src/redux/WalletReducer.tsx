import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import currency from "../../currency.json"

interface Transaction {
    amount: number;
    currency: string;
    description: string;
    date: string;
    income: boolean;
}

interface WalletState {
    transactions: Transaction[];
    totalAmount: number;
    totalIncome: number;
    totalExpense: number;
    currency: string;
}

const initialState: WalletState = {
    transactions: [],
    totalAmount: 0,
    totalIncome: 0,
    totalExpense: 0,
    currency: "USD",
};

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        addTransaction: (state, action: PayloadAction<Transaction>) => {
            const transaction = action.payload;
            const initialCurrencyObj = currency.find(obj => obj.name === state.currency);
            const incomingCurrencyObj = currency.find(obj => obj.name === transaction.currency);
            const ratio = initialCurrencyObj && incomingCurrencyObj ? initialCurrencyObj.value / incomingCurrencyObj.value : 0

            {
                state.currency == transaction.currency ? (state.totalAmount += transaction.income ? transaction.amount : -transaction.amount,
                    state.totalIncome += transaction.income ? transaction.amount : 0,
                    state.totalExpense += transaction.income ? 0 : transaction.amount)
                    : (
                        state.totalAmount += transaction.income ? transaction.amount * ratio : -transaction.amount * ratio,
                        state.totalIncome += transaction.income ? transaction.amount * ratio : 0,
                        state.totalExpense += transaction.income ? 0 : transaction.amount * ratio
                    )

            }
            state.transactions.push(transaction);
        },
        removeTransactionByDate: (state, action: PayloadAction<string>) => {
            const transactionToRemove = state.transactions.find((t) => t.date === action.payload);
            if (!transactionToRemove) {
                return;
            }
            state.transactions = state.transactions.filter((t) => t.date !== action.payload);
            state.totalAmount -= transactionToRemove.income ? transactionToRemove.amount : -transactionToRemove.amount;
            state.totalIncome -= transactionToRemove.income ? transactionToRemove.amount : 0;
            state.totalExpense -= transactionToRemove.income ? 0 : transactionToRemove.amount;
        },
    },
});

export const { addTransaction, removeTransactionByDate } = walletSlice.actions;

export default walletSlice.reducer;
