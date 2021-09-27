import { useReactive } from 'ahooks';
import React, { useContext } from 'react';

type DemoState = {
  darkMode?: boolean;
};
export type ContextTodoType = {
  state: DemoState;
};

export const DemoCtx = React.createContext<ContextTodoType | null>({} as ContextTodoType);

const CtxProvider = ({ children }: { children: React.ReactNode }) => {
  const state = useReactive<DemoState>({ darkMode: false });

  return (
    <DemoCtx.Provider
      value={{
        state,
      }}
    >
      {children}
    </DemoCtx.Provider>
  );
};

export default CtxProvider;

export const useDemoState = () => useContext(DemoCtx);
