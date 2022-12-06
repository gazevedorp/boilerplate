import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        width: 200,
        padding: 10,
        marginBottom: 10,
    },
    button: {
        backgroundColor: 'darkblue',
        width: 200,
        padding: 10,
        marginBottom: 10,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default styles;
