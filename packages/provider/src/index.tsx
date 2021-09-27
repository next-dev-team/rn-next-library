import { ThemeProvider as ShopifyThemeProvider } from '@shopify/restyle';
import React, { FC } from 'react';
import { AppTheme, lightTheme } from 'rn-next-dev';

const Provider: FC<{ theme?: AppTheme }> = ({ theme = lightTheme, children }) => {
  return <ShopifyThemeProvider theme={theme}>{children}</ShopifyThemeProvider>;
};

export default Provider;
