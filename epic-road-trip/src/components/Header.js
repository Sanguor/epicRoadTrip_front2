import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({title}) => {
    const onClick = () => {
        alert('Hey!')
    }

    return (
        <header className='header'>
            <h1/* style={headingStyle}*/>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}/>
        </header>
    )
}

Header.defaultProps = {
    title: 'Epic Trip Planner',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS in JS
/* const headingStyle = {
    color: 'red', 
    backgroundColor: 'black'
} */

export default Header
