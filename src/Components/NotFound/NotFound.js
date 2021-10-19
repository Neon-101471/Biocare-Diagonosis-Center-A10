import React from 'react';
import PageNotFound from '../Images/404Page.png';

const NotFound = () => {
    return (
        <div>
            <h2>Something wrong! Page not found!</h2>
            <img src={PageNotFound} alt="" />
        </div>
    );
};

export default NotFound;