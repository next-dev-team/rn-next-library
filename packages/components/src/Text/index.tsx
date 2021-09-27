import { createText } from '@shopify/restyle';
import { AppTheme } from 'rn-next-dev';

const Text = createText<AppTheme>();

export type TextProps = React.ComponentProps<typeof Text>;
export default Text;
