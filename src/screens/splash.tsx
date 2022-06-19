import React, { useEffect } from 'react'
import { View, Text, Alert, Image, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state';
import * as Services from '../services';
import { saveBookList } from '../state/store/books';
import { AppStackParams } from '../navigations/app-navigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<AppStackParams, "Splash">;

const SplashScreen = ({ route, navigation }: Props) => {
    const dispatch = useDispatch();

    const getBooks = async () => {
        Services.getBooks()
            .then(res => {
                const data: any = res;
                dispatch(saveBookList(data.books));
                navigation.navigate('Home');
            })
            .catch(err => {
                Alert.alert('Error', err);
            });
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text>SPLASH SCREEN</Text>
            <View style={{ height: 25 }} />
            <ActivityIndicator />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default SplashScreen;