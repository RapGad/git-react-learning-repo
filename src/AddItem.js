const AddItem = ({ addItem, setAddItem, handleAddItem}) => {
  return (
    <form>
         <input type="text"
        className="searchBox1"
        placeholder="Add new Item"
        value={addItem}
        onChange={(e)=>setAddItem(e.target.value)}
        />
        <button type="submit"
        onClick={handleAddItem}
        className="add">Add</button>
      
    </form>
  )
}

export default AddItem
