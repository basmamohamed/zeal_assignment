import React from 'react';
import NavigationStack from './NavigationStack';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './NavigationService';
import { enableScreens } from 'react-native-screens';

enableScreens();
function AppNavigator() {

    return (
        <NavigationContainer
            ref={navigatorRef => {
                NavigationService.setTopLevelNavigator(navigatorRef);
            }}
        >
            <NavigationStack />
        </NavigationContainer>
    );
}

export default AppNavigator;
