import { SpacingTheme } from '@vant-react-native/theme/lib/spacing';
import { TouchableOpacityProps } from 'react-native';
import { NBoxProps, NTextProps } from '..';

export type ButtonProps = TouchableOpacityProps &
  NBoxProps & {
    children?: React.ReactNode;
    /**
     * @description       Can be set to primary、info、warning、danger
     */
    type?: 'default' | 'primary' | 'info' | 'warning' | 'danger' | 'text';
    shape?: 'round' | 'square';

    /**
     * @description       Whether show loading status
     */
    loading?: boolean;
    /**
     * @description       Loading text
     */
    loadingText?: string;
    /**
     * @description       Whether to be square button
     */
    /**
     * @description       Can be set to 'lg' | 'md' | 'sm' | 'xs';
     */
    size?: SpacingTheme;

    /**
     * @description        The time interval (in milliseconds) between when onPress is triggered and when onDoublePress is called.
     */
    delayDoublePress?: number;
    /**
     * @description        The time interval (in milliseconds) between when onPress is triggered and when onDoublePress is called.
     */
    textProps?: NTextProps;
  };
