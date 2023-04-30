import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, Modal, FlatList } from 'react-native';
import styles from "./Home-styles"
import CustomButton from '../../Components/CustomButton';
import AddModal from '../../Modals/AddModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTransaction } from '../../redux/WalletReducer';
import Transaction from '../../Components/Transaction';
import CustomDropdown from '../../Components/CustomDropdown/CustomDropdown';


const API_KEY = '95fe7fa226344a98aad5b2c65c1c472c'; // Open Exchange Rates API key
const BASE_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&symbols=EUR,GBP,JPY`;

const Home = () => {
    const [rates, setRates] = useState<{ [key: string]: number }>({});
    const [isIncomeModalVisible, setIncomeModalVisible] = useState<boolean>(false);
    const [isExpenseModalVisible, setExpenseModalVisible] = useState<boolean>(false);
    const [filterCurrency, setFilterCurrency] = useState<string>('USD');
    const [filteredTransactions, setFilteredTransactions] = useState<Array<any>>();


    const transactions = useSelector((state: any) => state.wallet.transactions);
    const totalAmount = useSelector((state: any) => state.wallet.totalAmount);
    const totalIncome = useSelector((state: any) => state.wallet.totalIncome);
    const totalExpense = useSelector((state: any) => state.wallet.totalExpense);
    const currency = useSelector((state: any) => state.wallet.currency);
    const dispatch = useDispatch()
    const handleSave = (amount: number, currency: string, description: string, income: boolean) => {
        const newTransaction = {
            amount: amount,
            currency: currency,
            description: description,
            date: new Date().toISOString(),
            income: income
        };
        dispatch(addTransaction(newTransaction));
        setIncomeModalVisible(false);
        setExpenseModalVisible(false);
    }

    useEffect(() => {
        setFilteredTransactions(transactions)
        console.log(filteredTransactions)
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => (setRates(data.rates)))
            .catch(error => console.error(error));
    }, []);

    if (!rates) {
        return <Text>Loading...</Text>;
    }

    const renderItem = ({ item }: { item: any }) => (
        <Transaction item={item} />
    );

    const filterCurr = (value: string) => {
        const usdTransactions = transactions.filter((transaction: { currency: string; }) => transaction.currency === value);
        setFilteredTransactions(usdTransactions)
    }
    useEffect(() => { }, [])
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>FINANCE TRACKER</Text>
                <View style={styles.wallet}>
                    <Text style={styles.walletTitles}>Base Currency: {totalAmount.toFixed(1)}{" "}{currency}</Text>
                    <Text style={styles.walletTitles}>Total Incomes: {totalIncome.toFixed(1)}{" "}{currency}</Text>
                    <Text style={styles.walletTitles}>Total Expense: {totalExpense.toFixed(1)}{" "}{currency}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title="Incomes"
                        onPress={() => setIncomeModalVisible(true)}
                        bgColor='#28B9A0'
                    />
                    <CustomButton
                        title="Expense"
                        onPress={() => setExpenseModalVisible(true)}
                        bgColor='#DF6F8B'
                    />
                </View>
                <View style={styles.filterContainer}>
                    <Text>Filter</Text>
                    <CustomDropdown header='Choose currency' selectedOnPress={(value) => filterCurr(value)} selected={filterCurrency} />
                </View>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isIncomeModalVisible}
                    onRequestClose={() => setIncomeModalVisible(false)}>
                    <AddModal title={"Income"} income={true} visible={isIncomeModalVisible} onClose={() => setIncomeModalVisible(false)} onSave={handleSave} />
                </Modal>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isExpenseModalVisible}
                    onRequestClose={() => setExpenseModalVisible(false)}>
                    <AddModal title={"Expense"} income={false} visible={isIncomeModalVisible} onClose={() => setIncomeModalVisible(false)} onSave={handleSave} />
                </Modal>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    numColumns={2}
                    data={filteredTransactions}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}

                />
            </SafeAreaView>
        </View >
    );
};

export default Home;