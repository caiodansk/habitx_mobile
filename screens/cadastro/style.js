import {StyleSheet} from 'react-native'

export default styles = StyleSheet.create({
    container:{
        marginTop: 20,
        backgroundColor: '#0241A0',
        flex: 1
    },
    logoText: {
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
    },
    forms: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        textTransform: 'uppercase',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#FFF',
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 15,
        paddingLeft: 10,
    },
    button: {
        marginTop: 10,
    },
});
