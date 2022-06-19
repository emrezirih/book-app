import React, { useEffect } from 'react'
import { Text, StyleSheet, SafeAreaView, TextInput, View } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
    value: string;
    onChangeText: Function;
}

const SearchInput: React.FC<Props> = ({
    value,
    onChangeText
}) => {
    return (
        <View style={styles.container}>
            <Ionicons name="search" style={styles.icon} />
            <View style={{ width: 12 }} />
            <TextInput
                style={styles.input}
                placeholder='Search...'
                onChangeText={(text) => onChangeText(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 45,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        marginHorizontal: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    icon: {
        fontSize: 18
    },
    input: {
        width: '90%'
    }
});

export default SearchInput;