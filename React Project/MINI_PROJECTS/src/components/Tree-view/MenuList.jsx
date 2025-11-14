
export default function MenuItem({ item }) {
    return (
        <div className="menu-list-container">
            {

                list && list.length ?
                    list.map((listItem) => <MenuItem item={listItem} />) : null
            }
        </div>
    )
}
