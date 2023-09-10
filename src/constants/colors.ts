import {Theme} from '../@types/theme';

export const DefaultTheme: Theme = {
  dark: false,
  colors: {
    primary: '#0088cc',
    background: 'rgb(242, 242, 242)',
    font: 'rgb(28, 28, 30)',
    grayFont: '#808080',
    border: '#c4c4c4',
  },
};

export const DarkTheme: Theme = {
  dark: true,
  colors: {
    primary: '#0088cc',
    background: 'rgb(1, 1, 1)',
    font: 'rgb(229, 229, 231)',
    grayFont: '#AAAEB3',
    border: '#696969',
  },
};
