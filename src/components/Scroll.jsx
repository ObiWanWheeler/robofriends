import React from 'react';


class Scroll extends React.Component {

    render() {
        return (
            <div style={{ overflowY: 'scroll', height: '500px', margin: '0 10%' }}>
                {this.props.children}
            </div>
        );
    }
}

export default Scroll;