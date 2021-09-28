import Provider from '@vant-react-native/provider';
import { ScrollView } from 'react-native-gesture-handler';
import { darkTheme, lightTheme } from 'rn-next-dev';
import { NBox, NButton, NFlex, NHeader } from '..';
import CtxProvider, { useDemoState } from './DemoCtx';

const RootApp = ({ children }) => {
  return (
    <CtxProvider>
      <ScrollView>{children}</ScrollView>
    </CtxProvider>
  );
};

export const DemoProvider = ({ children }) => {
  const { state } = useDemoState();

  return (
    <RootApp>
      <Provider theme={state?.darkMode ? darkTheme : lightTheme}>
        <NHeader
          right={
            <NFlex>
              <NButton size="s" shape="round">
                Dark
              </NButton>
              <NBox mr="xs" />
              <NButton size="s" shape="round">
                En
              </NButton>
            </NFlex>
          }
        />

        <NBox>{children}</NBox>
      </Provider>
    </RootApp>
  );
};
