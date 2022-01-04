import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    inputContainer: {
        flexDirection: 'row',
        margin: 10,
    },
    input: {
        flex: 1,
        width: '80%',
        fontSize: 25,
        color: 'white'
    },
    addBtn: {
        width: '20%',
        marginHorizontal: 2,
        alignItems: 'center',
        alignSelf: 'center'
    },
    addBtnTxt: {
        alignItems: 'center',
        alignSelf: 'center',
        color: 'green',
        fontSize: 50
    },
    itemsContainer: {
        flexDirection: 'row',
    },
    itemBtn: {
        flex: 1,
    },
    listItem: {
        fontSize: 22,
        color:"white",
        marginVertical: 3,
        marginHorizontal: 7,
        padding: 10,
    },
    listItemChecked: {
        textDecorationLine: 'line-through'
    },
    delBtn: {
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 15
    },
})

export default estilo;