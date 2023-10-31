export default function ItemCard({ item }) {
  return (
    <div className="cursor-pointer border border-sky-500 bg-sky-800 m-4 p-2">
      <h3 className="text-xl font-bold">{item.name}</h3>
      <p>Buy {item.quantity} in {item.category}</p>
    </div>
  );
}
