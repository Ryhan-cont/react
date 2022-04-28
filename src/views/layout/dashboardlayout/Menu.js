import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div className='pa-15 align-h-end'>
            <Link to="/dashboard" className='px-10 py-5 txt-b3-bold  bg-primary color-white rd-4'>Dashboard</Link>
            <Link to="/about" className='px-10 py-5 txt-b3-bold  bg-primary color-white rd-4 ml-5'>About</Link>
            <Link to="/" className='px-10 py-5 txt-b3-bold bg-primary color-white rd-4 ml-5'>Home</Link>
        </div>        
    )
}
export default Menu