import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-r from-slate-900 to-slate-800">
            <main className="flex flex-auto justify-center overflow-y-auto p-10">
                {children}
            </main>
            <Footer />
        </div>
    );
}

export default Layout