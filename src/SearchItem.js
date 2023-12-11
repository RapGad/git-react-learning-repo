const SearchItem = ({ search, setSearch }) => {
  return (
    <form>
        <input type="text"
        className="searchBox"
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        />      
    </form>
  )
}

export default SearchItem
