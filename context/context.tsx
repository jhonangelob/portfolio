import { createContext, useState } from 'react';

type ChildProps = {
  children: React.ReactElement;
};

const AppContext = createContext<string | null>(null);

const Context = ({ children }: ChildProps) => {
  const [context, setContext] = useState<string>('');

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

export default Context;
