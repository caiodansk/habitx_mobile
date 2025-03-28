import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'space-between',
    },
    logoContainer: {
        backgroundColor: '#005BE3',
    },
    logoText: {
        textTransform: 'uppercase',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#333',
    },
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    mainText: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
    },
    button: {
        marginTop: 15,
    },

    cardContainer: {
        backgroundColor: '#fff',
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        marginRight: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
        color: '#333',
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 60, 
    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 10,
    },
});
