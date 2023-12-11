const ListItem = ({ item,handleDelete,handleOnChange }) => {
  return (
    <li key={item.id}>
        <input 
        type="checkbox" 
        checked={item.checked}
        onChange={()=>handleOnChange(item.id)}
        />
        <label>{item.item}</label>
        <button onClick={()=>handleDelete(item.id)}
        className="delete">X</button>

      
    </li>
  )
}

export default ListItem
