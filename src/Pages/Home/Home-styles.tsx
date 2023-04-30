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
        justifyContent: "space-around",
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
        color: "#fff",
        marginLeft:5
    }, titleIcon: {
        width: 30,
        height: 30
    },
    filterContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: 5,
        backgroundColor: "#7466E350",
        borderRadius: 5,
        paddingHorizontal: 5
    },
    filterButton: {
        borderWidth: 1,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
        borderColor: "#BEBEBE",
        borderRadius: 5,
        marginTop: 5
    },
    filterButtonTitle: {
        margin: 8,
        color: "#fff",
        fontFamily:"Roboto-Bold"
    },
    filterContainerTitle: {
        fontSize: 17,
        fontFamily: "Roboto-Bold",
        color: "#fff",
        marginTop: 5,
        marginRight: 5
    }
})