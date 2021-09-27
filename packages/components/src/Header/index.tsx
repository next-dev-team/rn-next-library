import { SpacingTheme } from '@vant-react-native/theme/lib/spacing';
import { ReactNode } from 'react';
import { helpers, NText } from 'rn-next-dev';
import { NBox, NButton, NFlex } from '..';

export type NHeaderProps = {
  center?: string | boolean | ReactNode;
  left?: ReactNode | string | boolean;
  right?: ReactNode | boolean;
};

const NHeader = (props: NHeaderProps) => {
  // const { netInfo } = useNetWork();
  const { center, left = true, right = true } = props;

  return (
    <NBox
      bg="colorRedLight"
      height={50}
      alignItems="center"
      paddingHorizontal="l"
      flexDirection="row"
      mt={helpers.ifIphoneX<SpacingTheme>('xxl', 'none')}
    >
      <NBox flexDirection="row" alignItems="center" justifyContent="flex-start">
        {typeof left === 'boolean' && left ? (
          <NButton>
            <NText variant="subheader" color="fgContrasting" opacity={0.9}>
              &#60;&nbsp;
            </NText>
            <NText variant="body" color="fgContrasting" opacity={0.9}>
              Back
            </NText>
          </NButton>
        ) : (
          left
        )}
      </NBox>

      <NBox flex={2} justifyContent="center" alignItems="center">
        {typeof center === 'string' ? (
          <NText variant="body" color="fgContrasting" opacity={0.9} textAlign="center">
            {center}
          </NText>
        ) : (
          center
        )}
      </NBox>

      <NBox justifyContent="flex-end">
        {typeof right === 'boolean' ? (
          <NFlex>
            <NText variant="body" color="fgContrasting" opacity={0.9}>
              Online
            </NText>
          </NFlex>
        ) : (
          right
        )}
      </NBox>
    </NBox>
  );
};

export default NHeader;
