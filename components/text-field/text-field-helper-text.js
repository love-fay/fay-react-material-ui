/**
 * Create by fay on 2018-11-05 16:47
 */
import React from 'react';
import './style/text-field-helper-text.scss';
import {MDCTextFieldHelperText} from '@material/textfield/helper-text';
import {MDCTextField} from '@material/textfield';
import classnames from 'classnames';

class TextField extends React.Component{

    constructor(props) {
        super(props);
        this.textFieldRef = React.createRef();
        this.textFieldHelperTextRef = React.createRef();
    }

    componentDidMount(){
        this.textField = MDCTextField.attachTo(this.textFieldRef.current);
        this.textFieldHelperText = MDCTextFieldHelperText.attachTo(this.textFieldHelperTextRef.current);
        // if(this.props.value) checkbox.value = this.props.value;
        // console.log(checkbox.value);
    }

    componentDidUpdate(){
        // if(this.props.checked) this.checkbox.checked = true;
        // if(this.props.disabled) this.checkbox.disabled = true;
        // if(this.props.indeterminate) this.checkbox.indeterminate = true;
    }

    render(){
        const {label, outlined, htmlFor, helperText, persistent} = this.props;
        return (
            [
                <div className="mdc-text-field" ref={this.textFieldRef} key={1}>
                    <input type="text" className="mdc-text-field__input"
                           aria-controls="username-helper-text"
                           aria-describedby="username-helper-text"/>
                    <label htmlFor={htmlFor} className="mdc-floating-label">{label}</label>
                    <div className="mdc-line-ripple"/>
                </div>,
                <p id="username-helper-text"
                   className={classnames("mdc-text-field-helper-text", {"mdc-text-field-helper-text--persistent":persistent})}
                   aria-hidden="true"
                   ref={this.textFieldHelperTextRef}
                   key={2}
                >
                    {helperText}
                </p>
            ]
        )
    }
}

export default TextField;