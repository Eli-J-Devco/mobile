/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import AppThemeProvider from './src/context/AppThemeProvider';
import Root from './src/navigations/Root';

function App(): React.JSX.Element {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <AppThemeProvider>
      <Root />
    </AppThemeProvider>
  );
}

export default App;
