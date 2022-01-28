const RenderMintedItems = (mints = []) => (
    <div>
        <p>Tree Planted</p>
        {mints.map((item) => {
            return <div className="gif-item" key={item.name}>
                <img src={item.imageLink} alt={item.name} ></img>
           </div>
        })}
    </div>
)

export default RenderMintedItems;