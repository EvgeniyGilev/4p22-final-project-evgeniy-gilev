import { useState } from 'react';
import Button from '../Common/Button/Button';
import './Footer.css';

export default function Footer() {
  const [isSubscribeButtonDisabled, setIsButtonDisabled] = useState(false);
  const onSubscribe = () => {
    console.log('subscribe');
    setIsButtonDisabled(true);
    setTimeout(() => {
      setIsButtonDisabled(false);
    }, 3000);
  };

  return (
    <footer>
      <input></input>
      <Button disabled={isSubscribeButtonDisabled} onClick={onSubscribe}>
        Подписаться
      </Button>
    </footer>
  );
}
