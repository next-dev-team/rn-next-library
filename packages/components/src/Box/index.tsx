import { createBox } from '@shopify/restyle';
import { AppTheme } from 'rn-next-dev';

const Box = createBox<AppTheme>();
export type BoxProps = React.ComponentProps<typeof Box>;

export default Box;
