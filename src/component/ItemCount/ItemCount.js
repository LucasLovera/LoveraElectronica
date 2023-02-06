
import './ItemCount.css';

const ItemCount = ({contador, setContador, stock}) => {
    const onAdd = () => {
        if (stock === contador) {
          alert('No hay Stock Disponible');
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
      <button className="button" onClick={onAdd} disabled={contador === stock}>
        +
      </button>
     
    </div>
  );
};

export default ItemCount;