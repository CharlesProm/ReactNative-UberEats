import { StyleSheet } from "react-native";

const formStyles = StyleSheet.create({
    generalContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ECDBBA',
        display: 'flex',
        paddingTop:10,
    }, hide: {
        display: 'none',
    }, title: {
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 30,
    }, input: {
        borderBottomWidth: 2,
        borderBottomColor: '#c1a97a',
        // textAlign:'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 17,
        marginVertical: 15,
        width: '90%',
        alignSelf: 'center',
    }, doubleInputContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
        width: '90%'
    }
    , doubleInput: {
        width: '48%',
        fontSize: 15
    }, btn: {
        backgroundColor: '#C84B31',
        marginTop: 40,
        width: '40%',
        alignSelf: 'center',
        paddingVertical: 13,
        borderRadius: 5,
    }, selectPicture: {
        alignSelf: 'center',
        backgroundColor: '#00000015',
        width: 200,
        height: 200,
        borderStyle: "dotted",
        borderWidth: 3,
        borderRadius: 1,
        borderColor: '#00000080',
        justifyContent: 'center',
        marginBottom: 20
    }, subtitle: {
        width: '100%',
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 18,
        color: '#161616'
    },datePickerContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 20
    }, datePickerBtn: {
        alignItems: 'center',
        width: '40%',
        borderRadius: 5,
    }, datePickerText: {
        color: "#000000db",
        textAlign: 'center',
        width: '100%',
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#c1a97a'
    }
})

export default formStyles