import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen")
export default StyleSheet.create({
    container: {
        alignItems: "center"
    },
    title: {
        fontSize: 40,
        fontFamily: "Serif-Bold",
        color: "#7776DF",
        textAlign: "center"

    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 25,
        width: width * 0.7,
    },
    wallet: {
        backgroundColor: "#36367A",
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
    }
})