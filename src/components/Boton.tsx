import React, { useEffect } from 'react';
import { Text, View, TouchableOpacity, useWindowDimensions } from 'react-native';
import {styles} from '../theme/Theme';

interface Props {
  title: string;
  background?: string;
  fontColor?: string;
  click: ()=> void;
}

export const Boton = (props: Props) => {
  const { width, height} = useWindowDimensions();
  useEffect(()=>{
    console.log(width, height);
  },[width]);
  const {title, background, fontColor} = props;
  const stylingButton =
    title === '0'
      ? {...styles.boton, width: 160}
      : background
      ? {...styles.boton, backgroundColor: background}
      : styles.boton;
  const text = background
    ? {...styles.botonText, color: background && fontColor}
    : styles.botonText;
  return (
    <TouchableOpacity onPress={props.click}>
      <View style={width > 500 ? {...stylingButton, width: 115, height: 45} : stylingButton}>
        <Text style={text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
