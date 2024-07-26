/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppThemeProvider from './src/context/AppThemeProvider';
import Root from './src/navigations/Root';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <>
      <AppThemeProvider>
        <Root />
      </AppThemeProvider>
      <Toast />
    </>
  );
}

export default App;
