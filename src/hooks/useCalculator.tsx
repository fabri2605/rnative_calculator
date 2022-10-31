import {useState} from 'react';

export const useCalculator = () => {
  const [operandum, setOperandum] = useState(0);
  const [resultado, setResultado] = useState('0');
  const [lastOp, setlastOp] = useState('add');

  const clickHandler = (type: string, value: string = 'c') => {
    if (type === 'num') {
      if ((resultado.includes('.') || resultado === '-') && value === '.') return;
      setResultado(prev =>
        prev === '0' && !(value === '.')
          ? value
          : prev === '-0' && !(value === '.')
          ? '-' + value
          : prev + value,
      );
    }
    if (type === 'operation') {
      if (
        !(
          value === 'ans' ||
          value === 'c' ||
          value === 'sig' ||
          value === 'del' ||
          value === 'sub'
        )
      ) {
        setlastOp(value);
      }
      switch (value) {
        case 'c':
          if (resultado === '0') {
            setOperandum(0);
          }
          setResultado('0');
          break;
        case 'sub':
          if (resultado === '0') {
            setResultado('-');
          } else {
            setlastOp('sub');
            setOperandum(Number(resultado));
            setResultado('0');
          }
          break;
        case 'sig':
          setResultado(prev => (Number(prev) * -1).toString());
          break;
        case 'del':
          setResultado(prev =>
            prev.slice(0, -1) === '' ? '0' : prev.slice(0, -1),
          );
          break;
        case 'ans':
          switch (lastOp) {
            case 'add':
              setResultado(prev => (operandum + Number(prev)).toString());
              break;
            case 'sub':
              setResultado(prev => (operandum - Number(prev)).toString());
              break;
            case 'mul':
              setResultado(prev => (operandum * Number(prev)).toString());
              break;
            case 'div':
              setResultado(prev => (operandum / Number(prev)).toString());
              break;
            default:
              break;
          }
          setOperandum(0);
          break;
        default:
          setOperandum(Number(resultado));
          setResultado('0');
          break;
      }
    }
  };

  return {clickHandler, operandum, resultado};
};
