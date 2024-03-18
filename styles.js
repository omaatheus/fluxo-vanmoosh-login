import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#FFFFE7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    vanmoosh: { 
        marginTop: 750,
        width: '30%',
        height: '30%',
        resizeMode: "contain",
        color: '#FFCC00',
    },
    containerForm: {
        backgroundColor: '#FFCC00',
        borderTopLeftRadius: 25, 
        borderTopRightRadius: 25, 
        paddingStart: '5%',
        paddingEnd: '5%',
        borderBottomLeftRadius: '25%',
        borderBottomRightRadius: '25%',
        width: 380,
        height: 1300
    },
    
    formInput: {
        marginTop: 100,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: '80%',
        padding: 10,
        margin: 10,
        marginLeft: 35,
        
    },
    formInputSenha: {
        marginTop: 10,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: '80%',
        padding: 10,
        margin: 10,
        marginLeft: 35,
        
    },
    formButton: {
        backgroundColor: '#FFFFE7',
        width: '80%',
        margin: 10,
        padding: 10,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        marginLeft: 35,
        marginTop: 10,
    },
    textButton: {
        color: '#FFCC00',
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: 10,
    },
    subButton: {
        padding: 10,
        marginLeft: 25,
    },
    subTextButton: {
        color: 'white'
    }

});