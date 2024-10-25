
const UpdateButtonComponent = ( {onClick, text} ) => {
    return (
        <button onClick={onClick} type="submit" className="page__content__btn-update">{text}</button>
    )
}

export default UpdateButtonComponent