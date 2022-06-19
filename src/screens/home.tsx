import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, SafeAreaView, FlatList, View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import SearchInput from '../components/search-input';
import { IBook } from '../models/book';
import { RootState } from '../state';
import { changeSortBy } from '../state/store/books';
import * as Analytics from 'expo-firebase-analytics';

const HomeScreen = () => {
    const dispatch = useDispatch();

    const bookList = useSelector((store: RootState) => store.books.list);
    const listSortBy = useSelector((store: RootState) => store.books.sortBy);

    const [books, setBooks] = useState(bookList);

    const [searchText, setSearchText] = useState('');

    function sortedBooks() {
        if (listSortBy == "increasing") {
            return books.slice().sort((a, b) => a.publicationYear - b.publicationYear);
        }
        if (listSortBy == "decreasing") {
            return books.slice().sort((a, b) => b.publicationYear - a.publicationYear);
        }
        return books;
    }

    const onChangeSortBy = (value: string) => {
        dispatch(changeSortBy(value));
        Analytics.logEvent('SortByYear-' + value);
    }

    const onChangeSearch = (value: string) => {
        setSearchText(value);
        const newList: IBook[] = [];
        bookList.map((item, index) => {
            if (item.title.toUpperCase().includes(value.toUpperCase())) {
                newList.push(item);
            }
        });
        setBooks(newList);
    }

    const renderBook = ({ item, index }: any) => {
        return (
            <View style={styles.itemContainer}>
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.author}</Text>
                </View>
                <Text>{item.publicationYear}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <SearchInput
                value={searchText}
                onChangeText={(text: string) => onChangeSearch(text)}
            />
            <View style={{ height: 12 }} />
            <Button title='Increasing by year' onPress={() => onChangeSortBy("increasing")} />
            <Button title='Decreasing by year' onPress={() => onChangeSortBy("decreasing")} />
            <View style={{ height: 12 }} />
            <FlatList
                data={sortedBooks()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderBook}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    itemContainer: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingVertical: 12,
        marginHorizontal: 12,
        marginVertical: 8
    }
});

export default HomeScreen;