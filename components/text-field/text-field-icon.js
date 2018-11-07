/**
 * Create by fay on 2018-11-05 16:47
 */
import React from 'react';
import './style/text-field-icon.scss';
import {MDCTextFieldIcon} from '@material/textfield/icon';
import {MDCTextField} from '@material/textfield';
import classnames from 'classnames';
import Icon from '../icon';

class TextField extends React.Component{

    constructor(props) {
        super(props);
        this.textFieldRef = React.createRef();
        this.textFieldIconRef = React.createRef();
    }

    componentDidMount(){
        this.textField = MDCTextField.attachTo(this.textFieldRef.current);
        this.textFieldIcon = MDCTextFieldIcon.attachTo(this.textFieldIconRef.current);
        // if(this.props.value) checkbox.value = this.props.value;
        // console.log(checkbox.value);
    }

    componentDidUpdate(){
        // if(this.props.checked) this.checkbox.checked = true;
        // if(this.props.disabled) this.checkbox.disabled = true;
        // if(this.props.indeterminate) this.checkbox.indeterminate = true;
    }

    render(){
        let {label, outlined, htmlFor, type, checked} = this.props;
        if(type !== 'trailing') type='leading';
        return (
            <div className={classnames("mdc-text-field", {'mdc-text-field--outlined': outlined}, {["mdc-text-field--with-"+type+"-icon"]:type})} ref={this.textFieldRef}>
                <span ref={this.textFieldIconRef}><Icon className="mdc-text-field__icon" tabIndex="0" role="button" type='smile'/></span>
                <input type="text" className="mdc-text-field__input"/>
                <label htmlFor={htmlFor} className="mdc-floating-label">{label}</label>
                {
                    outlined ?
                    [
                        <div className="mdc-notched-outline" key={1}>
                            <svg>
                                <path className="mdc-notched-outline__path"/>
                            </svg>
                        </div>,
                        <div className = "mdc-notched-outline__idle" key={2}/>
                    ]
                    :
                    <div className="mdc-line-ripple"/>
                }
            </div>
        )
    }
}

export default TextField;