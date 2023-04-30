import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        width: device.width * 0.35,
    },
    header: {
        fontFamily: "Nunito_400Regular",
        fontSize: 18,
    },
    selected: {
        borderWidth: 1,
        borderColor: "#BEBEBE",
        height: 32,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        flexDirection: "row",
        paddingLeft: 10,
        position: 'relative',
        zIndex: 1,
    },

    dropdown_icon: {
        width: 20,
        height: 20,
    },
    dropdown_button: {
        height: 40,
        width: 40,
        justifyContent: "center",
        alignItems: "flex-end",
        paddingRight: 10
    },
    dropdown_up_icon: {
        height: 12,
        width: 12,
        marginRight: 2
    },
    dropdown_container: {
        borderWidth: 1,
        borderTopWidth: 0,
        borderColor: "#BEBEBE",
        borderRadius: 4,
        maxHeight: device.height * 0.15,
    },
    dropdown_item: {
        padding: 10,
        height: 40,
    },
    dropdown_item_text: {
        color: "#fff",
        fontSize: 17,
    },
    dropdown_input: {
        color: "#fff",
        fontSize: 15,
        width: device.width * 0.25,
    }
});
