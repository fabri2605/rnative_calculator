import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {Calculator} from './src/screens/Calculator';
import { styles } from './src/theme/Theme';

export const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor='black' barStyle='dark-content'/>
      <Calculator />
    </SafeAreaView>
  );
};
