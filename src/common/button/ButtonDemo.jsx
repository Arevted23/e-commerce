import { createRoot } from 'react-dom/client';
import { Button1, Button2 } from './Button';

export const App = () => (
  <div>
    <Button1 />
    <Button2 />
  </div>
);

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
