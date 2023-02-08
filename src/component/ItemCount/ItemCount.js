
import './ItemCount.css';

const ItemCount = ({contador, setContador, stock}) => {
  const onAdd = () => {
    if (stock === contador) {
      return;
    }
    setContador(contador + 1);
  };

  const onDecrement = () => {
    if (0 === contador) {
      return;
    }
    setContador(contador - 1);
  };

  return (
    <div className="container">
      <button className="button" onClick={onDecrement} disabled={contador === 0}>
        -
      </button>
      <div className="counter">{contador}</div>
      {contador === stock ? null : (
        <button className="button" onClick={onAdd}>
          +
        </button>
      )}
    </div>
  );
};

export default ItemCount;