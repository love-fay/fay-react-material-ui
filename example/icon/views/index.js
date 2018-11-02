import React from 'react';
import '../font/iconfont';
import classnames from 'classnames';

class Demo extends React.Component{

    render(){
        const {type, className} = this.props;
        return (
            <svg className={classnames('material-icons', className)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={'#icon-'+type}></use>
            </svg>
        )
    }
}

export default Demo;