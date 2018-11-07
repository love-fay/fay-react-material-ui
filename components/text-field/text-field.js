/**
 * Create by fay on 2018-11-05 16:47
 */
import React from 'react';
import './style/text-field.scss';
import {MDCTextField} from '@material/textfield';
import classnames from 'classnames';
// import TextFieldFullwidth from './text-field-fullwidth'

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
        const {label, outlined, textarea, disabled, checked} = this.props;
        return (
            <div className={classnames("mdc-text-field", {'mdc-text-field--outlined':outlined}, {'mdc-text-field--disabled': disabled})} ref={this.textFieldRef}>
                <input type="text" className="mdc-text-field__input" disabled={disabled}/>
                {
                    outlined ?
                    [
                        <label htmlFor="tf-outlined" className="mdc-floating-label" key={1}>{label}</label>,
                        <div className="mdc-notched-outline" key={2}>
                            <svg>
                                <path className="mdc-notched-outline__path"/>
                            </svg>
                        </div>,
                        <div className = "mdc-notched-outline__idle" key={3}/>
                    ]
                    :
                    [
                        <label className="mdc-floating-label" htmlFor="my-text-field" key={1}>{label}</label>,
                        <div className="mdc-line-ripple" key={2}/>
                    ]
                }
            </div>
        )
    }
}

export default TextField;