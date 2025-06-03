import { useState } from 'react';
import { Button } from './components/ui/button';
// import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-pink-500 text-gray-700">Vite + React</h1>
      <div>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
