import ReactDOM from 'react-dom/client';
import App from './App';

declare global {
  interface Window {
    mfeGraphics?: {
      mount: (el: HTMLElement, props: any) => () => void;
    };
  }
}

window.mfeGraphics = {
  mount(el, props) {
    const root = ReactDOM.createRoot(el);
    root.render(<App {...props} />);
    return () => root.unmount();
  },
};

// Auto-mount in development/standalone mode
if (import.meta.env.DEV || !window.parent || window.parent === window) {
  const rootEl = document.getElementById('root');
  if (rootEl) {
    // Mock data for standalone testing
    const mockTransactions = [
      {
        id: 1,
        date: '2026-01-01',
        value: 1000,
        type: 'deposit',
        description: 'Salary',
      },
      {
        id: 2,
        date: '2026-01-02',
        value: 50,
        type: 'payment',
        description: 'Groceries',
      },
      {
        id: 3,
        date: '2026-01-03',
        value: 200,
        type: 'withdraw',
        description: 'Rent',
      },
    ];
    window.mfeGraphics.mount(rootEl, { transactions: mockTransactions });
  }
}
