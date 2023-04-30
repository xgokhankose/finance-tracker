import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, Image, Modal, FlatList, TouchableOpacity } from 'react-native';
import styles from "./Home-styles"
import CustomButton from '../../Components/CustomButton';
import AddModal from '../../Modals/AddModal';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTransaction, editBalance } from '../../redux/WalletReducer';
import Transaction from '../../Components/Transaction';
import CustomDropdown from '../../Components/CustomDropdown/CustomDropdown';


const Home = () => {
    const [filterCurrency, setFilterCurrency] = useState<string>('USD');
    const [filteredTransactions, setFilteredTransactions] = useState<Array<any>>();
    const [selectedType, setSelectedType] = useState<string>()

    const [isIncomeModalVisible, setIncomeModalVisible] = useState<boolean>(false);
    const [isExpenseModalVisible, setExpenseModalVisible] = useState<boolean>(false);
    

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


    const renderItem = ({ item }: { item: any }) => (
        <Transaction item={item} />
    );

    const filterCurr = (value: string) => {
        const usdTransactions = transactions.filter((transaction: { currency: string; }) => transaction.currency === value);
        setFilteredTransactions(usdTransactions)
    }

    const filterBaseCurr = (value: string) => {
        dispatch(editBalance(value));
    }
    const filterType = (value: boolean) => {
        if (value) {
            setSelectedType("Income")
            const usdTransactions = transactions.filter((transaction: { income: boolean; }) => transaction.income === value);
            setFilteredTransactions(usdTransactions)
        } else {
            setSelectedType("Expense")
            const usdTransactions = transactions.filter((transaction: { income: boolean; }) => transaction.income === value);
            setFilteredTransactions(usdTransactions)
        }
    }
    useEffect(() => { setFilteredTransactions(transactions) }, [transactions])
    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isIncomeModalVisible}
                    onRequestClose={() => setIncomeModalVisible(false)}>
                    <AddModal amountProp={0} descriptionProp='' currencyProp='' title={"Income"} income={true} visible={isIncomeModalVisible} onClose={() => setIncomeModalVisible(false)} onSave={handleSave} />
                </Modal>
                <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isExpenseModalVisible}
                    onRequestClose={() => setExpenseModalVisible(false)}>
                    <AddModal amountProp={0} descriptionProp='' currencyProp='' title={"Expense"} income={false} visible={isExpenseModalVisible} onClose={() => setExpenseModalVisible(false)} onSave={handleSave} />
                </Modal>
                

                <Text style={styles.title}>FINANCE TRACKER</Text>
                <View style={styles.wallet}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.walletTitles}>Balance:</Text>
                        <Text style={styles.walletTitles}>{totalAmount.toFixed(1)}{" "}{currency}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.walletTitles}>Total Incomes:</Text>
                        <Text style={[styles.walletTitles, { color: "#28B9A0" }]}>{totalIncome.toFixed(1)}</Text>
                        <Text style={styles.walletTitles}>{currency}</Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.walletTitles}>Total Expense:</Text>
                        <Text style={[styles.walletTitles, { color: "#DF6F8B" }]}>{totalExpense.toFixed(1)}</Text>
                        <Text style={styles.walletTitles}>{currency}</Text>
                    </View>
                    <CustomDropdown header='Choose currency' selectedOnPress={(value) => filterBaseCurr(value)} selected={filterCurrency} />
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title="Income"
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

                    <CustomDropdown header='Choose currency' selectedOnPress={(value) => filterCurr(value)} selected={filterCurrency} />
                    <TouchableOpacity onPress={() => filterType(true)} style={[styles.filterButton, selectedType == "Income" ? { backgroundColor: "#28B9A0" } : null]}>
                        <Text style={styles.filterButtonTitle}>Income</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => filterType(false)} style={[styles.filterButton, selectedType == "Expense" ? { backgroundColor: '#DF6F8B' } : null]}>
                        <Text style={styles.filterButtonTitle}>Expense</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => (setFilteredTransactions(transactions), setSelectedType(""))} style={[styles.filterButton, { backgroundColor: "#EF444480" }]}>
                        <Text style={styles.filterButtonTitle}>Reset</Text>
                    </TouchableOpacity>
                </View>
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