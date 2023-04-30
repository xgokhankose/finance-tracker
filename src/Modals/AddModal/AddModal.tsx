import React, { useState } from 'react';
import {
    Modal, View, Text, TextInput, TouchableOpacity, SafeAreaView,
    KeyboardAvoidingView, Platform,
    StyleSheet,
    ScrollView,
    Image
} from 'react-native';
import styles from './AddModal-styles';
import currencyRates from "../../../currency.json"
import { BlurView } from 'expo-blur';
import CustomDropdownStyles from '../../Components/CustomDropdown/CustomDropdown-styles';
import CustomDropdown from '../../Components/CustomDropdown/CustomDropdown';
import { LinearGradient } from 'expo-linear-gradient';

interface ModalProps {
    visible: boolean;
    onClose: () => void;
    onSave: (amount: number, currency: string, description: string, income: boolean) => void;
    income: boolean;
    title: string
}

const AddModal: React.FC<ModalProps> = ({ visible, onClose, onSave, income, title }) => {
    const [amount, setAmount] = useState<number>(0);
    const [currency, setCurrency] = useState<string>('USD');
    const [description, setDescription] = useState<string>('');

    const handleSave = () => {
        onSave(amount, currency, description, income);
        setAmount(0);
        setCurrency('USD');
        setDescription('');
    };


    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
            <BlurView intensity={50} style={StyleSheet.absoluteFill} />

            <View style={styles.innerContainer}>
                <TouchableOpacity onPress={() => onClose()} style={styles.iconContainer}>
                    <Image style={styles.icon} source={require("../../../assets/close.png")} />
                </TouchableOpacity>

                <Text style={styles.title}>{title}</Text>
                <View style={styles.currencyContainer}>
                    <Text style={styles.currencyContainerTitle}>Amount:</Text>
                    <TextInput
                        style={styles.currencyContainerInput}
                        placeholder="Enter amount"
                        keyboardType="numeric"
                        value={amount.toString()}
                        onChangeText={(value) => setAmount(Number(value))}
                    />
                </View>
                <View style={styles.currencyContainer}>
                    <Text style={styles.currencyContainerTitle}>Currency:</Text>
                    <CustomDropdown header='Choose currency' selectedOnPress={setCurrency} selected={currency} />
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.currencyContainerTitle}>Description:</Text>
                    <TextInput
                        multiline={true}
                        style={styles.descInput}
                        placeholder="Enter description"
                        value={description}
                        onChangeText={(value) => setDescription(value)}
                        placeholderTextColor="gray"
                    />
                </View>
                <TouchableOpacity onPress={handleSave} >
                    <LinearGradient
                        colors={['#7462E1', '#83EABE']}
                        style={styles.button}
                        start={{ x: 0, y: 0.8 }}
                        end={{ x: 1, y: 0.9 }}
                    >
                        <Text style={{ color: '#fff', fontSize: 18 }}>Save</Text>
                    </LinearGradient >

                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
};

export default AddModal;
