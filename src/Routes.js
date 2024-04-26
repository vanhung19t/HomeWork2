import React from 'react';
import Homescreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomNavigationBar from './CustomNavigationBar';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        header: (props) => <CustomNavigationBar {...props} />,
                    }}>
                    <Stack.Screen name="Home" component={Homescreen} />
                    <Stack.Screen name="Details" component={DetailsScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}

export default Routes;
