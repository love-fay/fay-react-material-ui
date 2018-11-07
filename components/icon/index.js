import React from 'react';
import './font/iconfont';
import classnames from 'classnames';
import './style/icon.scss';

class Icon extends React.Component{

    render(){
        const {type, className, ...props} = this.props;
        return (
            <svg {...props} className={classnames('material-icons', className)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={'#icon-'+type}/>
            </svg>
        )
    }
}

export default Icon;