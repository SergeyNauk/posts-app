import React from 'react';

//components
import Header from '../Header';
import Footer from '../Footer';

class About extends React.Component {

    render() {
        return (
            <div className="flex-wrapper">
                <div>
                    <Header />
                    <h1>Hello! i`am about component</h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default About;