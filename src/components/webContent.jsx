import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

class WebContent extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <h1>Web课 - {this.props.params.chapter} </h1>
                <div>内容</div>
                <Link to="/web">返回</Link>
            </React.Fragment>
        );
    }
}
 
const States= (props)=>(
    <WebContent
        {...props}
        params={useParams()}
    />
)

export default States