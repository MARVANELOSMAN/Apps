import React from 'react';
import { StatusBar, Platform, LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { CartProvider } from './components/context/CartContext';
import { AuthProvider } from './components/context/AuthContext';
import { ThemeProvider } from './components/context/ThemeContext';

// Import AppNavigator which contains all navigation configuration
import AppNavigator from './components/navigation/AppNavigator';

// Disable specific warnings that might not be relevant
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'VirtualizedLists should never be nested',
]);

const App = () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <StatusBar 
              barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'} 
              backgroundColor="#5C3BFE"
            />
            <AppNavigator />
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
};

export default App;