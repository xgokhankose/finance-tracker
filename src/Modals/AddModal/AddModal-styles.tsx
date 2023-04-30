import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get("screen")
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flex: 1
    },
    title: {
        color: "#fff",
        fontFamily: "Roboto-Bold",
        fontSize: 25,
        margin: 50
    },
    innerContainer: {
        backgroundColor: "#36367A",
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: "center",
        paddingBottom: 40,
        paddingHorizontal: 30
    },
    amountInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        marginBottom: 16,
        width: 300,
    },
    currencyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
        width: device.width * 0.6
    },
    descContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        width: device.width * 0.6,
    },
    currencyContainerTitle: {
        fontSize: 18,
        marginRight: 8,
        width: device.width * 0.2,
        color: "#fff",
        textAlign: "left",
    },
    currencyContainerInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 6,
        padding: 8,
        width: device.width * 0.35,
        fontFamily: "Roboto-Bold",
        color: "#fff"
    },
    descInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 8,
        height: 70,
        width: device.width * 0.35,
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 4,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: device.width * 0.4,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20

    },
    absolute: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 17,
        height: 17,

    },
    iconContainer: {
        width: device.width * 0.6,
        alignItems: "flex-end",
        marginTop: 30
    }

})
export default styles