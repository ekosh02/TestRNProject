import {ColorValue, StyleSheet} from 'react-native';

type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

const setFontStyles = (
  fontSize: number | undefined = 16,
  fontWeight: FontWeight = '400',
  color: ColorValue = '#000',
) => {
  const styles = StyleSheet.create({
    font: {
      fontSize,
      fontWeight,
      color,
    },
  });
  return styles.font;
};

export default setFontStyles;
