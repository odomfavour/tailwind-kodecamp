import notfound from '../assets/images/404.svg'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='not max-container mx-auto'>
        <img className='img img-' src={notfound} alt="" />
        <p className='mt-6'> Oops! Looks like the page this page does not exist.</p>
        <button className='btn-primary mt-6'><Link to='/'>Back to Homepage</Link></button>
    </div>
  )
}

export default NotFound