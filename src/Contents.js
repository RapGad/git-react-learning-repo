import ListItem from "./ListItem"
const Contents = ({ items,handleDelete,handleOnChange }) => {
    return (
        <main>
            {items.length ? (
                <ul>
                    {items.map(item=>(
                        <ListItem
                        key={item.id}
                        item={item}
                        handleDelete={handleDelete}
                        handleOnChange={handleOnChange}
                        />
                    ))}

                </ul>

            ):(
                <p>There are no Items</p>
            )}
            

        </main>


    )
}

export default Contents
