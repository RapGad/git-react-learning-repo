import SearchItem from "./SearchItem";
import AddItem from "./AddItem";
import Contents from "./Contents";
import { useState } from "react";
function App() {

  const [search, setSearch] = useState('')
  const [addItem, setAddItem] = useState('')
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: 'rice'
    },
    {
      id: 2,
      checked: false,
      item: 'banku'
    },
    {
      id: 3,
      checked: true,
      item: 'ampesi'
    }
  ])

  function handleAddItem(e){
    e.preventDefault()
    const id = items.length+1
    const newItem = {
      id:id,
      checked: false,
      item: addItem
    }

    const ListItems = [...items,newItem]
    setItems(ListItems)
    setAddItem('')
  }

  function handleDelete(id){
    const ListItems = items.filter(item=>item.id !== id)
    setItems(ListItems)

  }
  function handleOnChange(id){
    const ListItem = items.map(item=>item.id === id ? {...item,checked:!item.checked}:item)
    setItems(ListItem)

  }
  return (
    <div className="App">
      <SearchItem 
      search={search}
      setSearch={setSearch}
      />
      
      <AddItem 
      addItem={addItem}
      setAddItem={setAddItem}
      handleAddItem={handleAddItem}/>


      <Contents 
      items={items.filter(item=>(item.item).toLowerCase().includes(search.toLowerCase()))}
      handleDelete={handleDelete}
      handleOnChange={handleOnChange}
      />

      
    </div>
  );
}

export default App;
