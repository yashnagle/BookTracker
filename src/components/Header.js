import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'

const Header = ({ title , onAdd, showAdd}) => {
    const location = useLocation()
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && <Button 
            color = {showAdd? 'red':'Green'} text = {showAdd? 'Close':'Add'} 
            onClick={onAdd}/>}
        </header>
    )
}


// Default prop when nothing is passed to the header
Header.defaultProps = {
    title: 'Book Tracker',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
// const headStyle ={ 
//     color:'white', 
//     backgroundColor:'green'
// }
export default Header
