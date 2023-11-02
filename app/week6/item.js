function Item({ name, quantity, category }) {
  return (
    <div>
        <p>{name}</p> 
        <p>Buy {quantity} in {category}</p>
    </div>
  );
}

export default Item;