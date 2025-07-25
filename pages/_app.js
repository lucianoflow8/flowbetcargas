import '../styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const container = document.createElement('div');
    for (let i = 0; i < 15; i++) {
      const logo = document.createElement('div');
      logo.className = 'logo-particle';
      logo.style.top = Math.random() * 100 + 'vh';
      logo.style.left = Math.random() * 100 + 'vw';
      logo.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(logo);
    }
    document.body.appendChild(container);
  }, []);

  return <Component {...pageProps} />;
}
