import React from "react";
import './BusinessList.css';
//Recall that .. indicates a parent directory
import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                <Business />
                <Business />
                <Business />
                <Business />
            </div>
        )
    }
}

export default BusinessList;
