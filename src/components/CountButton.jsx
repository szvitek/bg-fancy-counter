import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButton({ setCount, type, locked }) {
  const handleClick = (event) => {
    setCount((count) => {
      if (type === 'minus') {
        const newCount = count - 1;
        return newCount < 0 ? 0 : newCount;
      } else {
        const newCount = count + 1;
        return newCount > 5 ? 5 : newCount;
      }
    });

    event.currentTarget.blur();
  };

  return (
    <button disabled={locked} className="count-btn" onClick={handleClick}>
      {type === 'minus' ? (
        <MinusIcon className="count-btn-icon" />
      ) : (
        <PlusIcon className="count-btn-icon" />
      )}
    </button>
  );
}
