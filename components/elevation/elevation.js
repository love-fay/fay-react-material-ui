import React from 'react';
import './style/index.scss';
import Icon from '../icon';
import classnames from 'classnames';

class Elevation extends React.Component{

    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render(){
        const {n, ...props} = this.props;
        return (
            <div {...props} className={classnames("mdc-elevation--z"+n)}>
                {n}dp
            </div>
        )
    }
}

export default Elevation;