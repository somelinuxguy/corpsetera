let ProductPage = (props) => {
    let foundItem = props.items.find(item => item.id === props.match.params.id)
    return foundItem ? <p>{foundItem.title} and other such nonsense</p> : <p>Bronk...</p>
}

export default ProductPage;