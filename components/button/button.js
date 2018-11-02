import React from 'react';
import './style/button.scss';
import {MDCRipple} from '@material/ripple';
import Icon from '../icon';
import classnames from 'classnames';


class ButtonDemo extends React.Component{

    constructor(props){
        super(props);
        this.button = React.createRef();
    }

    componentDidMount(){
        MDCRipple.attachTo(this.button.current);
    }

    render(){
        const {iconType, disabled, raised, className, children, buttonType, unelevated, outlined, dense, rippleUnbounded, ...props} = this.props;
        return (
            <button
                {...props}
                className={
                    classnames(
                        'mdc-button',
                        {[`mdc-button--${buttonType}`]: true},
                        {'mdc-button--raised':raised},
                        {'mdc-button--unelevated':unelevated},
                        {'mdc-button--outlined':outlined},
                        {'mdc-button--dense':dense},
                        className
                    )
                } disabled={disabled} ref={this.button} data-mdc-ripple-is-unbounded={rippleUnbounded}>
                {iconType && <Icon className='mdc-button__icon' type={iconType}/>}
                {children}
            </button>
        )
    }
}

export default ButtonDemo;