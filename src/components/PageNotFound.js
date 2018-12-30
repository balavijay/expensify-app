import React from 'react';
import {Link} from 'react-router-dom';

const PageNotFound = ()=> (
    <p> 
        404 ! 
        <Link to="/">Link to Home</Link>
    </p>
);

export default PageNotFound;