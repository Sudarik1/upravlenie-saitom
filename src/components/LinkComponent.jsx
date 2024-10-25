
import { NavLink } from "react-router-dom"

const LinkComponent = (props) => {
    const isLinkActive = ( { isActive } ) =>
        isActive
        ? 'page__nav__link page__nav__link--active'
        : 'page__nav__link'
    
    return ( 
        <NavLink to = {props.endpoint} className={isLinkActive}>{props.text}</NavLink>
    )
}

export default LinkComponent