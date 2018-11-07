/**
 * Create by fay on 2018-11-05 16:47
 */
import React from 'react';
import './style/checkbox.scss';
import {MDCFormField} from '@material/form-field';
import {MDCCheckbox} from '@material/checkbox';
import classnames from 'classnames';

class Checkbox extends React.Component{

    constructor(props) {
        super(props);
        this.formFieldRef = React.createRef();
        this.checkboxRef = React.createRef();
    }

    componentDidMount(){
        this.checkbox = MDCCheckbox.attachTo(this.checkboxRef.current);
        this.formField = MDCFormField.attachTo(this.formFieldRef.current);
        this.formField.input = this.checkbox;
        if(this.props.checked) this.checkbox.checked = true;
        if(this.props.disabled) this.checkbox.disabled = true;
        if(this.props.indeterminate) this.checkbox.indeterminate = true;
        // if(this.props.value) checkbox.value = this.props.value;
        // console.log(checkbox.value);
    }

    componentDidUpdate(){
        // if(this.props.checked) this.checkbox.checked = true;
        // if(this.props.disabled) this.checkbox.disabled = true;
        // if(this.props.indeterminate) this.checkbox.indeterminate = true;
    }

    render(){
        const {label, checkKey, disabled, checked} = this.props;
        return (
            <div>
                <div className="mdc-form-field" ref={this.formFieldRef}>
                    <div className={classnames("mdc-checkbox", {"mdc-checkbox--disabled": disabled})} ref={this.checkboxRef}>
                        <input type="checkbox"
                               className="mdc-checkbox__native-control"
                               id={checkKey} disabled={disabled}/>
                        <div className="mdc-checkbox__background">
                            <svg className="mdc-checkbox__checkmark"
                                 viewBox="0 0 24 24">
                                <path className="mdc-checkbox__checkmark-path"
                                      fill="none"
                                      d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                            </svg>
                            <div className="mdc-checkbox__mixedmark"></div>
                        </div>
                    </div>
                    <label htmlFor={checkKey}>{label}</label>
                </div>
            </div>
        )
    }
}

export default Checkbox;