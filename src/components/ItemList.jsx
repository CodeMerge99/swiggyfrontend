const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="m-2 p-2 border-gray-200 border-b-2 text-left">
            <div className="p-2">
                <span>{item.card.info.name}</span>
                <span> - Rs {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultprice / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
            <div className="absolute">
                <button className="p-2 bg-orange-400 shadow-lg m-auto">
                Add
                </button>
            </div>
        </div>
        
      ))}
    </div>
  );
};
export default ItemList;
