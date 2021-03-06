import tokens from '@shopify/polaris-tokens';

const {
  colorPurpleText,
  colorPurpleDarker,
  colorPurpleDark,
  colorPurple,
  colorPurpleLight,
  colorPurpleLighter,
  colorIndigoText,
  colorIndigoDarker,
  colorIndigoDark,
  colorIndigo,
  colorIndigoLight,
  colorIndigoLighter,
  colorBlueText,
  colorBlueDarker,
  colorBlueDark,
  colorBlue,
  colorBlueLight,
  colorBlueLighter,
  colorTealText,
  colorTealDarker,
  colorTealDark,
  colorTeal,
  colorTealLight,
  colorTealLighter,
  colorGreenText,
  colorGreenDarker,
  colorGreenDark,
  colorGreen,
  colorGreenLight,
  colorGreenLighter,
  colorYellowText,
  colorYellowDarker,
  colorYellowDark,
  colorYellow,
  colorYellowLight,
  colorYellowLighter,
  colorOrangeText,
  colorOrangeDarker,
  colorOrangeDark,
  colorOrange,
  colorOrangeLight,
  colorOrangeLighter,
  colorRedText,
  colorRedDarker,
  colorRedDark,
  colorRed,
  colorRedLight,
  colorRedLighter,
  colorInk,
  colorInkLight,
  colorInkLighter,
  colorInkLightest,
  colorSkyDark,
  colorSky,
  colorSkyLight,
  colorSkyLighter,
  colorBlack,
  colorWhite,
} = tokens || {};

export const colorsTheme = {
  transparent: 'transparent',
  body: tokens.colorBlack,
  bgRegular: tokens.colorWhite,
  bgSubdued: tokens.colorSkyLighter,
  // --- fg is foreground color -------
  fgRegular: tokens.colorBlack,
  fgOff: tokens.colorInkLight,
  fgSubdued: tokens.colorInkLightest,
  fgContrasting: tokens.colorWhite,
  fgSuccess: tokens.colorGreenDark,

  // --- hl is hight light color -------
  hlPrimary: tokens.colorIndigo,
  hlPrimaryDisabled: tokens.colorIndigoLight,

  buttonBgPlain: tokens.colorSky,
  errorPrimary: tokens.colorRed,
  iconBgDark: tokens.colorBlueDarker,
  colorPurpleText,
  colorPurpleDarker,
  colorPurpleDark,
  colorPurple,
  colorPurpleLight,
  colorPurpleLighter,
  colorIndigoText,
  colorIndigoDarker,
  colorIndigoDark,
  colorIndigo,
  colorIndigoLight,
  colorIndigoLighter,
  colorBlueText,
  colorBlueDarker,
  colorBlueDark,
  colorBlue,
  colorBlueLight,
  colorBlueLighter,
  colorTealText,
  colorTealDarker,
  colorTealDark,
  colorTeal,
  colorTealLight,
  colorTealLighter,
  colorGreenText,
  colorGreenDarker,
  colorGreenDark,
  colorGreen,
  colorGreenLight,
  colorGreenLighter,
  colorYellowText,
  colorYellowDarker,
  colorYellowDark,
  colorYellow,
  colorYellowLight,
  colorYellowLighter,
  colorOrangeText,
  colorOrangeDarker,
  colorOrangeDark,
  colorOrange,
  colorOrangeLight,
  colorOrangeLighter,
  colorRedText,
  colorRedDarker,
  colorRedDark,
  colorRed,
  colorRedLight,
  colorRedLighter,
  colorInk,
  colorInkLight,
  colorInkLighter,
  colorInkLightest,
  colorSkyDark,
  colorSky,
  colorSkyLight,
  colorSkyLighter,
  colorBlack,
  colorWhite,
};

export type ColorsTheme = keyof typeof colorsTheme;
