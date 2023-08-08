import React from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';


const HomeScreen = () => {
    return (
        <SafeAreaView>

            <View style={styles.view}><Text>HomeScreen</Text></View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    view: {
        paddingTop: Platform.OS == 'ios' ? 0 : Constants.statusBarHeight
    }
})