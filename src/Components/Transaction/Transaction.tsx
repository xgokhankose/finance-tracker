import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import styles from './Transaction-style';
import { LinearGradient } from 'expo-linear-gradient';
import { removeTransactionByDate } from '../../redux/WalletReducer';
import { useDispatch } from 'react-redux';
import AddModal from '../../Modals/AddModal';
import { updateTransactionByDate } from '../../redux/WalletReducer';



interface Props {
    item: any
}

const Transaction: React.FC<Props> = ({ item }) => {
    const [isEditModalVisible, setEditModalVisible] = useState<boolean>(false);


    const dispatch = useDispatch()
    const handleSave = (amount: number, currency: string, description: string, income: boolean) => {
        const updatedTransaction = {
            amount: amount,
            currency: currency,
            description: description,
            date: new Date().toISOString(),
            income: item.income,
        };

        const date = item.date

        const payload = {
            date,
            updatedTransaction,
        };
        dispatch(updateTransactionByDate(payload));

        setEditModalVisible(false);
    }
    return (
        <View style={styles.container}>
            <Modal
                transparent={true}
                animationType="fade"
                visible={isEditModalVisible}
                onRequestClose={() => setEditModalVisible(false)}>
                <AddModal amountProp={item.amount} descriptionProp={item.description} currencyProp={item.currency} title={"Edit"} income={item.income} visible={isEditModalVisible} onClose={() => setEditModalVisible(false)} onSave={handleSave} />
            </Modal>
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.containerTitle}>Descripton:</Text>
                    <Text style={styles.containerText}>{item.description.length > 0 ? item.description : "Empty"}</Text>
                </View>
                <View>
                    <Text style={styles.containerTitle}>Amount:</Text>
                    <Text style={styles.containerText}>{item.amount} {item.currency}</Text>
                </View>
                <View>
                    <Text style={styles.containerTitle}>Date:</Text>
                    <Text style={styles.containerText}>{item.date}</Text>
                </View>
                <Text style={item.income ? styles.income : styles.expense}>{item.income ? 'Income' : 'Expense'}</Text>
            </View>
            <View style={styles.iconContainer}>

                <TouchableOpacity onPress={() => setEditModalVisible(true)}>
                    <Image style={styles.icon} source={require("../../../assets/write.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => dispatch(removeTransactionByDate(item.date))}>
                    <Image style={styles.icon} source={require("../../../assets/delete.png")} />
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default Transaction