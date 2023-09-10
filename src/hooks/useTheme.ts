import {useAppSelector} from './useStore';
import {DarkTheme, DefaultTheme} from '../constants/colors';

const useTheme = () => {
  const isDark = useAppSelector(state => {
    return state.darkMode.value;
  });

  return isDark ? DarkTheme : DefaultTheme;
};

export default useTheme;
