const Item = (props) => {
    return (
        <a href="/" class="list-group-item list-group-item-action list-group-item-danger">{props.texto}</a>
    )
}

export default Item;