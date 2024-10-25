
import LinkComponent from "./LinkComponent"

const Navbar = () => {
    return (
        <nav className="page__nav">
            <LinkComponent endpoint ="/" text="Главная"/>
            <LinkComponent endpoint ="/pages" text="Страницы"/>
            <LinkComponent endpoint ="/notes" text="Заметки"/>
            <LinkComponent endpoint ="/comments" text="Комментарии"/>
            <LinkComponent endpoint ="/motto" text="Слоган"/>
            <LinkComponent endpoint ="applications" text="Заявки"/>
        </nav>
    )
}

export default Navbar