import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#34377A50",
        borderRadius: 5,
        margin: 5,
        padding: 5,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        width: device.width * 0.45,
        height: device.height * 0.22,
    },
    innerContainer: {
        borderRadius: 5,
        margin: 5,
        padding: 5,
        justifyContent: "space-between"
    },
    containerText: {
        color: "#fff",
        fontFamily: "Roboto-Regular",
        marginBottom: 10,
        fontSize: 13,

    },
    containerTitle: {
        color: "#fff",
        fontFamily: "Roboto-Bold",
        fontSize: 17
    },
    income: {
        color: '#28B9A0',
        fontFamily: "Serif-Bold"
    },
    expense: {
        color: '#DF6F8B',
        fontWeight: 'bold',
    },
    iconContainer: {

    },
    icon: {
        width: 20,
        height: 20,
        marginVertical: 5,

    }
})

export default styles