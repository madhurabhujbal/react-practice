import PropTypes from 'prop-types'

const Header = () => {
    return (
        <header>
            <h2>Task Tracker</h2>
        </header>
    )
}

Header.defaultProps ={
    title: 'Task Tracker'
} 

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
