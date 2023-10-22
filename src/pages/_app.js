import { useEffect, useState } from 'react';
import '@/styles/globals.css';
import CookieConsentBanner from '@/components/CookieConsentBanner';

export default function App({ Component, pageProps }) {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const number = Math.floor(Math.random() * 6) + 1;
    setRandomNumber(number);
  }, []);

  return (
    <div>
      {randomNumber !== null && <CookieConsentBanner type={randomNumber} />}
      <Component {...pageProps} />
    </div>
  );
}
