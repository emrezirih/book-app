import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from '../navigations/app-navigator';

const Navigation = () => {
    return (
        <SafeAreaProvider>
            <AppNavigator />
        </SafeAreaProvider>
    );
};

export default Navigation;
