import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
import Product from './pages/product';

const Stack = createStackNavigator();

function Routes(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Main" 
          component={Main} 
          options={{ 
            title: 'JSHunt',
            headerStyle: {
              backgroundColor: "#DA552F"
            },
            headerTintColor: "#FFF"
          }}
          />
          <Stack.Screen 
            name="Product"
            component={Product}
            options = {({ route }) => ({ title: route.params.product.title })}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Routes;