import { ChakraProvider } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';
import theme from './theme';

function App() {

  const [scrollY, setScrollY] = useState(null);
  const [isDown, setIsDown] = useState(null);
  const headerRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollY) { // scroll direction is down
        setIsDown(true);
      } else {
        setIsDown(false);
      }
      setScrollY(currentScrollY);
    });

    if (isDown && window.screen.width >= 768) {
      headerRef.current.classList.remove('fadeIn');
      headerRef.current.classList.add('fadeOut');
    } else if (window.screen.width >= 768) {
      headerRef.current.classList.remove('fadeOut');
      headerRef.current.classList.add('fadeIn');
    }
  }, [scrollY, isDown]);

  return (
    <ChakraProvider theme={theme}>
      <Header ref={headerRef} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </ChakraProvider>
  );
}

export default App;
