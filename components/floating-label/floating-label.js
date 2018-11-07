/**
 * Create by fay on 2018-11-05 16:47
 */
import React from 'react';
import './style/floating-label.scss';
import {MDCFloatingLabel} from '@material/floating-label';
import classnames from 'classnames';

class FloatingLabel extends React.Component{

    constructor(props) {
        super(props);
        this.labelRef = React.createRef();
    }

    componentDidMount(){
        this.checkbox = MDCFloatingLabel.attachTo(this.labelRef.current);
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
                <label className="mdc-text-field">
                    <input type="text" className="mdc-text-field__input"/>
                        <span className="mdc-floating-label" ref={this.labelRef}>Hint Text</span>
                        <div className="mdc-text-field__bottom-line"></div>
                </label>
            </div>
        )
    }
}

export default FloatingLabel;