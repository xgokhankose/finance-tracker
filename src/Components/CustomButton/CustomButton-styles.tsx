import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        width: 100,
        height: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8
    },
    title: {
        fontSize: 18,
        color: '#fff',
        fontFamily: "Serif-Regular"

    },
});

export default styles;