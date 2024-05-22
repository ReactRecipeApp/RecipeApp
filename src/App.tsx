import './App.css';
import { useRef, useState, FormEvent } from 'react';


function App() {
  const [nazivi, setNazivi] = useState<string[]>([]);
  const nazivRef = useRef<HTMLInputElement>(null);

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    const valueN = nazivRef.current?.value;
    if (!valueN) return;

    setNazivi((prev) => {
      return [...prev, valueN];
    });

    // Optionally, you can clear the input after submission
    if (nazivRef.current) {
      nazivRef.current.value = '';
    }
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        New Item: <input ref={nazivRef} type="text" />
        <br />
        <button type="submit">ADD</button>
      </form>
      <br />
      <h3>Items:</h3>
      {nazivi.map((naziv, index) => (
        <div key={index}>{naziv}</div>
      ))}
    </>
  );
}

export default App;
