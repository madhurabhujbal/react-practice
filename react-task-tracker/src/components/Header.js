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

//CSS in JS. call the below function whereever this style has to be applied. eg: <h2 style={{headingStyle}}>Task Tracker</h2>
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
