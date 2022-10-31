import React, { useEffect } from 'react';
import {Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import {Boton} from '../components/Boton';
import {styles} from '../theme/Theme';
import {useCalculator} from '../hooks/useCalculator';

export const Calculator = () => {
  const {clickHandler, operandum, resultado} = useCalculator();
  
  useEffect(()=>{
    SplashScreen.hide();
    
  },[]);

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultadoSmall}>{operandum !== 0 && operandum}</Text>
      <Text style={styles.resultado} adjustsFontSizeToFit numberOfLines={1}>
        {resultado.toString()}
      </Text>

      <View style={styles.board}>
        <View style={styles.row}>
          <Boton
            click={() => {
              clickHandler('operation');
            }}
            background="grey"
            fontColor="black"
            title="C"
          />
          <Boton
            click={() => {
              clickHandler('operation', 'sig');
            }}
            background="grey"
            fontColor="black"
            title="+/-"
          />
          <Boton
            click={() => {
              clickHandler('operation', 'del');
            }}
            background="grey"
            fontColor="black"
            title="del"
          />
          <Boton
            click={() => {
              clickHandler('operation', 'div');
            }}
            background="orange"
            fontColor="black"
            title="/"
          />
        </View>

        <View style={styles.row}>
          <Boton
            click={() => {
              clickHandler('num', '1');
            }}
            title="1"
          />
          <Boton
            click={() => {
              clickHandler('num', '2');
            }}
            title="2"
          />
          <Boton
            click={() => {
              clickHandler('num', '3');
            }}
            title="3"
          />
          <Boton
            click={() => {
              clickHandler('operation', 'mul');
            }}
            background="orange"
            fontColor="black"
            title="X"
          />
        </View>

        <View style={styles.row}>
          <Boton
            click={() => {
              clickHandler('num', '4');
            }}
            title="4"
          />
          <Boton
            click={() => {
              clickHandler('num', '5');
            }}
            title="5"
          />
          <Boton
            click={() => {
              clickHandler('num', '6');
            }}
            title="6"
          />
          <Boton
            click={() => {
              clickHandler('operation', 'sub');
            }}
            background="orange"
            fontColor="black"
            title="-"
          />
        </View>

        <View style={styles.row}>
          <Boton
            click={() => {
              clickHandler('num', '7');
            }}
            title="7"
          />
          <Boton
            click={() => {
              clickHandler('num', '8');
            }}
            title="8"
          />
          <Boton
            click={() => {
              clickHandler('num', '9');
            }}
            title="9"
          />
          <Boton
            click={() => {
              clickHandler('operation', 'add');
            }}
            background="orange"
            fontColor="black"
            title="+"
          />
        </View>

        <View style={styles.row}>
          <Boton
            click={() => {
              clickHandler('num', '0');
            }}
            title="0"
          />
          <Boton
            click={() => {
              clickHandler('num', '.');
            }}
            title="."
          />
          <Boton
            click={() => {
              clickHandler('operation', 'ans');
            }}
            background="orange"
            fontColor="black"
            title="="
          />
        </View>
      </View>
    </View>
  );
};
