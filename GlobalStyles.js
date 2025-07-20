import { StyleSheet, Platform, StatusBar } from 'react-native';

export default StyleSheet.create({
    androidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        //backgroundColor: '#c7ffda',
        paddingHorizontal: 20,
        alignItems: 'center',
        //justifyContent: 'center',
    },
});