import React from 'react';
import './style/floating-action-button.scss';
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
        const {iconType, className, children, extended, mini, exited, rippleUnbounded, ...props} = this.props;
        return (
            <button {...props} className={classnames('mdc-fab', {'mdc-fab--extended':extended}, {'mdc-fab--mini':mini}, {'mdc-fab--exited':exited}, className)} ref={this.button} data-mdc-ripple-is-unbounded={rippleUnbounded}>
                <Icon className="mdc-fab__icon" type={iconType}/>
                <span className="mdc-fab__label">{children}</span>
            </button>
        )
    }
}

export default ButtonDemo;