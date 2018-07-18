import React from 'react';

//components
import Header from '../Header';
import Footer from '../Footer';

class Contacts extends React.Component {

    render() {
        return (
            <div className="flex-wrapper">
                <div>
                    <Header />
                    <h1>Hello! i`am contacts component</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contacts;