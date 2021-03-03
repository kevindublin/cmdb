import React from 'react';

class Temperature extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {temp} = this.props
        return <span>{temp ?? 'N/A'} &deg;F</span>
    }
}

export default Temperature