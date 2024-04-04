import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ setCount, type }) {
  const handleClick = () => {
    setCount((count) => {
      if (type === 'minus') {
        const newCount = count - 1;
        return newCount < 0 ? 0 : newCount;
      } else {
        return count + 1;
      }
    });
  };

  return (
    <button className="count-btn" onClick={handleClick}>
      {type === 'minus' ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
