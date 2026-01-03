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
