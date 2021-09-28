import React from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { helpers } from 'rn-next-dev';
import { NBox, NFlex, NText } from '..';
import { ButtonProps } from './type';
import { useButton } from './useButton';

const Button = (props: ButtonProps) => {
  const { loading, children, textProps, type, ...rest } = props;
  const { getBackgroundColor, getSizeHeight, getBorderRadius, theme } = useButton(props);
  return (
    <TouchableOpacity onPress={rest.onPress} activeOpacity={0.8}>
      <NBox
        alignItems="center"
        justifyContent="center"
        paddingHorizontal="m"
        height={getSizeHeight}
        bg={getBackgroundColor}
        borderRadius={getBorderRadius}
        {...helpers.omit(rest, 'onPress')}
      >
        <NFlex>
          {loading && (
            <>
              <ActivityIndicator
                size="small"
                animating
                color={type === 'default' ? theme.colors.fgSuccess : theme.colors.colorWhite}
              />
              <NBox ml="s" />
            </>
          )}
          {typeof children === 'string' ? (
            <NText textTransform="capitalize" color="colorWhite" {...textProps}>
              {children}
            </NText>
          ) : (
            children
          )}
        </NFlex>
      </NBox>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  type: 'default',
  size: 'm',
} as ButtonProps;

export default Button;
