import { useTheme } from '@shopify/restyle';
import { AppTheme, ColorsTheme } from '@vant-react-native/theme';
import { useCreation } from 'ahooks';
import { ButtonProps } from './type';

export const useButton = (props: ButtonProps) => {
  const { type, shape, size, loading, loadingText, children, textProps } = props;
  const theme = useTheme<AppTheme>();

  const getSizeHeight = useCreation(() => {
    switch (size) {
      case 'l':
        return 50;
      case 's':
        return 32;
      case 'xs':
        return 24;
      default:
        return 44;
    }
  }, [size]);

  const getBackgroundColor = useCreation(() => {
    const getBg = (): ColorsTheme => {
      if (type === 'primary') return 'fgSuccess';
      if (type === 'danger') return 'colorRed';
      if (type === 'info') return 'colorBlack';
      if (type === 'warning') return 'colorOrange';
      return 'transparent';
    };
    return getBg();
  }, [type]);

  const getBorderRadius = useCreation(() => {
    const getBd = (): keyof AppTheme['borderRadii'] => {
      if (shape === 'round') return 'full';
      return 'none';
    };
    return getBd();
  }, [shape]);

  return {
    getSizeHeight,
    getBackgroundColor,
    getBorderRadius,
    theme,
  };
};
