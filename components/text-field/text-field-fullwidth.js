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
        const {label, fullwidth, disabled, checked} = this.props;
        return (
            <div className='mdc-text-field mdc-text-field--fullwidth' ref={this.textFieldRef}>
                <input className="mdc-text-field__input"
                       type="text"
                       placeholder="Full-Width Text Field"
                       aria-label="Full-Width Text Field"/>
            </div>
        )
    }
}

export default TextField;