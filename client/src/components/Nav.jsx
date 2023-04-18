import React from 'react';
import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <div className='d-flex justify-content-between p-3'>
            <h1>Pet Shelter</h1>
            <Link to={'/createPet/form'}>Add a pet to the shelter</Link>
            <Link to={'/'}>Home</Link>
        </div>
        </div>
    );
}

export default Nav;
