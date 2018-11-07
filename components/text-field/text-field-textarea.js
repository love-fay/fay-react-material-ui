/**
 * Create by fay on 2018-11-05 16:47
 */
import React from 'react';
import './style/text-field.scss';
import {MDCTextField} from '@material/textfield';
import classnames from 'classnames';

class TextField extends React.Component{

    constructor(props) {
        super(props);
        this.textFieldRef = React.createRef();
    }

    componentDidMount(){
        this.textField = MDCTextField.attachTo(this.textFieldRef.current);
        // if(this.props.value) checkbox.value = this.props.value;
        // console.log(checkbox.value);
    }

    componentDidUpdate(){
        // if(this.props.checked) this.checkbox.checked = true;
        // if(this.props.disabled) this.checkbox.disabled = true;
        // if(this.props.indeterminate) this.checkbox.indeterminate = true;
    }

    render(){
        const {label, outlined, disabled, checked} = this.props;
        return (
            <div className={classnames("mdc-text-field mdc-text-field--textarea", {'mdc-text-field--disabled': disabled})} ref={this.textFieldRef}>
                <textarea className="mdc-text-field__input" rows="8" cols="40" disabled={disabled}/>
                <label htmlFor="textarea" className="mdc-floating-label">{label}</label>
            </div>
        )
    }
}

export default TextField;