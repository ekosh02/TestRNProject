import React, {FC, ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import useTheme from '../../hooks/useTheme';

interface ColumnViewProps {
  style?: StyleProp<ViewStyle> | undefined;
  children?: ReactNode | undefined;
}

const ColumnView: FC<ColumnViewProps> = ({style, children}) => {
  const {colors} = useTheme();

  return (
    <View style={[{backgroundColor: colors.background}, style]}>
      {children}
    </View>
  );
};

export default ColumnView;
