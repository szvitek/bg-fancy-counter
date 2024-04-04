import { MinusIcon, PlusIcon } from '@radix-ui/react-icons';

export default function CountButtons({ setCount }) {
  return (
    <div className="button-container">
      <button
        className="count-btn"
        onClick={() => setCount((count) => count - 1)}
      >
        <MinusIcon className="count-btn-icon" />
      </button>
      <button
        className="count-btn"
        onClick={() => setCount((count) => count + 1)}
      >
        <PlusIcon className="count-btn-icon" />
      </button>
    </div>
  );
}
