import React from 'react';
import { StatusBar, View } from 'react-native';
import Navigator from './navigation';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux'
import configureStore from './redux/store/configureStore'
const { persistor, store } = configureStore();
import { PersistGate } from 'redux-persist/es/integration/react';
import 'react-native-gesture-handler'

enableScreens();

export default Entrypoint = () => {

    return (
        <Provider store={store}>
            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor="transparent"
                    translucent={true}
                    barStyle="dark-content" />
                <PersistGate persistor={persistor} >
                </PersistGate>
                <Navigator />
            </View >
         </Provider>
    )

}
