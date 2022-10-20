export function List(props) {
  // Called when someone selects an item
  const handleSelectedItem = (itemId) => {
    props.selectItem(itemId);
  };

  return (
    <ul className="list-group">
      {/* Loop over all items in the list */}
      {props.items.map((item) => {
        {
          /* A key needs to be defined for every list */
        }
        return (
          <ListItem
            key={item.id}
            item={item}
            itemSelected={handleSelectedItem}
          />
        );
      })}
    </ul>
  );
}

export function ListItem(props) {
  const item = props.item;

  const handleClick = function (event) {
    props.itemSelected(item.id);
  };

  return (
    <li className="list-group-item" onClick={handleClick}>
      {item.home} vs. {item.opponent}
    </li>
  );
}
