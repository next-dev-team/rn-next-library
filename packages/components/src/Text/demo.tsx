import React from 'react';
import { NText } from '..';
import { DemoProvider } from '../utils/DemoProvider';

export default () => {
  return (
    <DemoProvider>
      <NText variant="header" color="fgSuccess">
        11ss
      </NText>
    </DemoProvider>
  );
};
