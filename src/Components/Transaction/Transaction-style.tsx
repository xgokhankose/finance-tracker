import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#34377A50",
        borderRadius: 5,
        height: device.height * 0.17,
        width: device.width * 0.4,
        margin: 5,
        padding: 5,
        justifyContent: "space-between"
    },
    containerText: {
        color: "#fff",
        fontFamily: "Roboto-Regular",

    },
    containerTitle: {
        color: "#fff",
        fontFamily: "Roboto-Bold",
    },
    income: {
        color: '#28B9A0',
      fontFamily:"Serif-Bold"
    },
    expense: {
        color: '#DF6F8B',
        fontWeight: 'bold',
    },
})

export default styles