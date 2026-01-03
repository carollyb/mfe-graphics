import { ClientThemeProvider } from '@carollyb/bank-design-system';
import GraphicApp from './components/GraphicApp';

type RemoteAppProps = {
  testeMfe: string;
};

export default function App({ testeMfe }: RemoteAppProps) {
  return (
    <ClientThemeProvider>
      <GraphicApp testeMfe={testeMfe} />
    </ClientThemeProvider>
  );
}
