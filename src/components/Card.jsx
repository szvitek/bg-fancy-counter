import { useEffect, useState } from 'react';
import Count from './Count';
import ButtonContainer from './ButtonContainer';
import ResetButton from './ResetButton';
import Title from './Title';
import CountButton from './CountButton';

export default function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5;

  useEffect(() => {
    const handleKeydown = (event) => {
      if (event.code === 'Space') {
        const newCount = count + 1;
        newCount > 5 ? setCount(5) : setCount(count + 1);
      }
    };
    window.addEventListener('keydown', handleKeydown);
    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [count]);

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton setCount={setCount} />
      <ButtonContainer>
        <CountButton type="minus" setCount={setCount} locked={locked} />
        <CountButton type="plus" setCount={setCount} locked={locked} />
      </ButtonContainer>
    </div>
  );
}
