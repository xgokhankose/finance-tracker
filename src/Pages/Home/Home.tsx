import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from "./Home-styles"
import CustomButton from '../../Components/CustomButton';


const API_KEY = '95fe7fa226344a98aad5b2c65c1c472c'; // Open Exchange Rates API key
const BASE_URL = `https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&symbols=EUR,GBP,JPY`;

const Home = () => {
    const [rates, setRates] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(data => setRates(data.rates))
            .catch(error => console.error(error));
    }, []);

    if (!rates) {
        return <Text>Loading...</Text>;
    }
    const onPressx = () => {
        console.log("PRESSED")
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>FINANCE TRACKER</Text>
                <View style={styles.wallet}>
                    <Text style={styles.walletTitles}>Base Currency:</Text>
                    <Text style={styles.walletTitles}>Total Incomes:35123</Text>
                    <Text style={styles.walletTitles}>Total Expense:2312</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <CustomButton
                        title="Incomes"
                        onPress={onPressx}
                        bgColor='#28B9A0'
                    />
                    <CustomButton
                        title="Expense"
                        onPress={onPressx}
                        bgColor='#DF6F8B'
                    /></View>

            </SafeAreaView>
        </View >
    );
};

export default Home;