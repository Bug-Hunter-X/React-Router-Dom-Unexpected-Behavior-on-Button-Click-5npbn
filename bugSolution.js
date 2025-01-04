```javascript
import { BrowserRouter, Routes, Route,useRef } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* ...more routes */}
      </Routes>
    </BrowserRouter>
  );
}

function Home() {
  const buttonRef = useRef(null);
  const handleClick = () => {
    //Action to be performed
    console.log('Button clicked!');
  };

  return (
    <div>
      <h1>Home</h1>
      <button ref={buttonRef} onClick={handleClick}>Click Me</button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
}
export default App; 
```