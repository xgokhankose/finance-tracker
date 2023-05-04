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

            const initialCurrencyObj = currency.find(obj => obj.name === state.currency);
            const incomingCurrencyObj = currency.find(obj => obj.name === transactionToRemove.currency);
            const ratio = initialCurrencyObj && incomingCurrencyObj ? initialCurrencyObj.value / incomingCurrencyObj.value : 0

            state.totalAmount -= transactionToRemove.income ? transactionToRemove.amount * ratio : -transactionToRemove.amount * ratio;
            state.totalIncome -= transactionToRemove.income ? transactionToRemove.amount * ratio : 0;
            state.totalExpense -= transactionToRemove.income ? 0 : transactionToRemove.amount * ratio;
            state.transactions = state.transactions.filter((t) => t.date !== action.payload);
        },
        editBalance: (state, action: PayloadAction<string>) => {
            const transaction = action.payload;
            const initialCurrencyObj = currency.find(obj => obj.name === state.currency);
            const incomingCurrencyObj = currency.find(obj => obj.name === transaction);
            const ratio = initialCurrencyObj && incomingCurrencyObj ? initialCurrencyObj.value / incomingCurrencyObj.value : 0
            state.totalAmount *= ratio
            state.totalIncome *= ratio
            state.totalExpense *= ratio
            state.currency = action.payload;
        },
        updateTransactionByDate: (state, action: PayloadAction<{ date: string; updatedTransaction: Transaction }>) => {
            const { date, updatedTransaction } = action.payload;
            console.log(updatedTransaction)
            const transactionToUpdate = state.transactions.find((t) => t.date === date);

            if (!transactionToUpdate) {
                return;
            }
            const initialCurrencyObj = currency.find((obj) => obj.name === state.currency);
            const incomingCurrencyObj = currency.find((obj) => obj.name === updatedTransaction.currency);
            const transactionCurrencyObj = currency.find((obj) => obj.name === transactionToUpdate.currency);

            const oldRatio = transactionCurrencyObj && initialCurrencyObj ? initialCurrencyObj.value / transactionCurrencyObj.value : 0;
            const newRatio = initialCurrencyObj && incomingCurrencyObj ? initialCurrencyObj.value / incomingCurrencyObj.value : 0;

            state.totalAmount = state.totalAmount -
                (transactionToUpdate.income ? transactionToUpdate.amount * oldRatio : -transactionToUpdate.amount * oldRatio) +
                (updatedTransaction.income ? updatedTransaction.amount * newRatio : -updatedTransaction.amount * newRatio);
            state.totalIncome =
                state.totalIncome -
                (transactionToUpdate.income ? transactionToUpdate.amount * oldRatio : 0) +
                (updatedTransaction.income ? updatedTransaction.amount * newRatio : 0);

            state.totalExpense =
                state.totalExpense -
                (transactionToUpdate.income ? 0 : transactionToUpdate.amount * oldRatio) +
                (updatedTransaction.income ? 0 : updatedTransaction.amount * newRatio);

            transactionToUpdate.amount = updatedTransaction.amount;
            transactionToUpdate.currency = updatedTransaction.currency;
            transactionToUpdate.description = updatedTransaction.description;
            transactionToUpdate.date = updatedTransaction.date;
            transactionToUpdate.income = updatedTransaction.income;
        },


    },
});

export const { addTransaction, removeTransactionByDate, editBalance, updateTransactionByDate } = walletSlice.actions;

export default walletSlice.reducer;
