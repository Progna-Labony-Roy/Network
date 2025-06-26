import PropTypes from 'prop-types';

const Link = ({route}) => {
    return (
 
       <div>
       <li className='lg:pr-12 md:pr-6 md:pt-2 my-1 hover:underline'>
        <a href={route.path}>{route.name}</a>
       </li>
       </div>
    );
};

Link.propTypes= {
    route: PropTypes.object
}

export default Link;