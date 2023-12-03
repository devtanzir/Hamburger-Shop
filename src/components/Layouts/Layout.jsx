import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout({children}) {
    return (
        <>
            <Header/>
            <div>{children}</div>
            <Footer/>
        </>
    );
}

export default Layout;