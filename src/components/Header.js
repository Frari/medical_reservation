import React from 'react';

const Header = ({titolo}) => {
    return ( <header>
                <h1 className='text-center'>{titolo}</h1>
            </header>  );
}
 
export default Header;