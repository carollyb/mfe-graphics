import { ClientThemeProvider } from '@carollyb/bank-design-system';
import GraphicApp from './components/GraphicApp';
import type { Transaction } from './types/Transaction';

type RemoteAppProps = {
  transactions: Transaction[];
};

export default function App({ transactions }: RemoteAppProps) {
  return (
    <ClientThemeProvider>
      <GraphicApp transactions={transactions} />
    </ClientThemeProvider>
  );
}
