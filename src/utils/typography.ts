import {TextStyle} from 'react-native';
import setFontStyles from './setFontStyles';

enum Graph {
  big = 'big',
  bigBold = 'bigBold',
  headings = 'headings',
  headingsBold = 'headingsBold',
  rounded = 'rounded',
  roundedBold = 'roundedBold',
  content = 'content',
  contentBold = 'contentBold',
}

type GraphType = keyof typeof Graph;

interface Font {
  [index: string]: TextStyle;
}

export const typography = (graph: GraphType, color: string = '#000') => {    
  const font: Font = {
    [Graph.big]: {
      fontSize: 30,
      fontWeight: '500',
    },
    [Graph.bigBold]: {
      fontSize: 30,
      fontWeight: '600',
    },
    [Graph.headings]: {
      fontSize: 24,
      fontWeight: '500',
    },
    [Graph.headingsBold]: {
      fontSize: 30,
      fontWeight: '600',
    },
    [Graph.rounded]: {
      fontSize: 18,
      fontWeight: '400',
    },
    [Graph.roundedBold]: {
      fontSize: 18,
      fontWeight: '500',
    },
    [Graph.content]: {
      fontSize: 16,
      fontWeight: '400',
    },
    [Graph.contentBold]: {
      fontSize: 16,
      fontWeight: '500',
    },
  };

  return setFontStyles(font[graph].fontSize, font[graph].fontWeight, color);
};
