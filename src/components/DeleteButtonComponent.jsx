
const DeleteButtonComponent = ( { onClick, text } ) => {
    return (
        <button onClick={onClick} className="page__content__btn-delete">{text}</button>
    )
}

export default DeleteButtonComponent