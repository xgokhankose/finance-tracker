import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        alignItems: "center"
    },
    title: {
        fontSize: 35,
        fontFamily: "Serif-Bold",
        color: "#e0ffff",
        textAlign: "center"
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 25,
        width: width * 0.7,
    },
    wallet: {
        backgroundColor: "#34377A99",
        paddingVertical: 25,
        width: width * 0.8,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    walletTitles: {
        fontSize: 15,
        fontFamily: "Serif-Regular",
        color: "#fff"
    }, titleIcon: {
        width: 30,
        height: 30
    },
    filterContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: width * 0.8,
    }
})