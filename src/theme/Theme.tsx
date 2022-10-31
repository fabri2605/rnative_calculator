import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  fondo: {
    backgroundColor: 'black',
    flex: 1,
  },
  calculatorContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingHorizontal: 15,
  },
  resultado: {
    alignSelf: 'flex-end',
    color: 'white',
    fontSize: 60,
  },
  resultadoSmall: {
    alignSelf: 'flex-end',
    fontSize: 30,
    color: 'rgba(255,255,255,0.5)',
  },
  board: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  boton: {
    borderRadius: 160,
    backgroundColor: '#333333',
    width: 75,
    height: 75,
    justifyContent: 'center',
    marginVertical: 3,
    paddingBottom:3,
  },
  botonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: '300',
    textAlign: 'center',
  },
});
