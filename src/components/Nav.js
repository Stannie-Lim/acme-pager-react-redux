import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = ({ location }) => {
    const pages = useSelector(state => state.pages);
    const prev = parseInt(location.pathname.slice(1)) - 1;
    const next = parseInt(location.pathname.slice(1)) + 1;

    const pagesLink = [];
    for(let page = 0; page < pages; page++) {
        pagesLink.push(<Link key={ page } to={`/${page}`}>{ page + 1}</Link>)
    }
    return (
        <nav>
            <Link to={prev < 0 ? `/${prev + 1}` : `/${prev}`}>Prev</Link>
            { pagesLink }
            <Link to={next >= pages ? `/${next - 1}` : `/${next}`}>Next</Link>
        </nav>
    );
};

export default Nav;