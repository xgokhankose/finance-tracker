import { View, Text } from 'react-native';
import styles from './Transaction-style';
import { LinearGradient } from 'expo-linear-gradient';

interface Props {
    item: any
}

const Transaction: React.FC<Props> = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={{ marginBottom: 5 }}>
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
    )
}
export default Transaction