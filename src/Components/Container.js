import React, { Component } from 'react'
import FetchSampleData from './FetchSampleData';
import '../CSS/Container.css'
class Container extends Component {
    render() {
        return (
            <div className="Container">
                <FetchSampleData/>

            </div>
        )
    }
}

export default Container
