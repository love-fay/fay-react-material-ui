import React from 'react';
import './style/icon-button.scss';
import {MDCRipple} from '@material/ripple';
import {MDCIconButtonToggle} from '@material/icon-button';
import Icon from '../icon';
import classnames from 'classnames';

class ButtonDemo extends React.Component{

    constructor(props){
        super(props);
        this.button = React.createRef();
    }

    componentDidMount(){
        MDCRipple.attachTo(this.button.current);
        this.props.iconType || (new MDCIconButtonToggle(this.button.current));
    }

    render(){
        const {iconType, className, title, children, extended, mini, exited, toggleContent, toggleType='icon', disabled, ...props} = this.props;
        return (
            iconType ?
            <button {...props} className={classnames("mdc-icon-button", className)} ref={this.button} data-mdc-ripple-is-unbounded disabled={disabled} title={title}>
                <Icon type={iconType} style={{fontSize: '12px'}}/>
            </button>
                :
            <button
                {...props}
                aria-hidden="true"
                aria-pressed="true"
                className={classnames('mdc-icon-button mdc-icon-button--on', className)} ref={this.button} data-mdc-ripple-is-unbounded title={title}>
                {
                    toggleType === 'img' && [
                        <img className="mdc-icon-button__icon mdc-icon-button__icon--on" src={toggleContent[0]} key={toggleContent[0]}/>,
                        <img className="mdc-icon-button__icon" src={toggleContent[1]} key={toggleContent[1]}/>
                    ]
                }
                {
                    toggleType === 'icon' && [
                        <Icon className="mdc-icon-button__icon mdc-icon-button__icon--on" type={toggleContent[0]} key={toggleContent[0]}/>,
                        <Icon className="mdc-icon-button__icon" type={toggleContent[1]} key={toggleContent[1]}/>
                    ]
                }
            </button>
        )
    }
}

export default ButtonDemo;