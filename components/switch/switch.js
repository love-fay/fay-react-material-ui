import React from 'react';
import './style/switch.scss';
import Icon from '../icon';
import classnames from 'classnames';
import {MDCSwitch} from '@material/switch';

class Switch extends React.Component{

    constructor(props){
        super(props);
        this.switchRef = React.createRef();
    }

    componentDidMount(){
        const switchControl = MDCSwitch.attachTo(this.switchRef.current);
    }

    render(){
        const {disabled, checked, label, htmlFor, ...props} = this.props;
        return (
            <div>
                <div className={classnames("mdc-switch", {'mdc-switch--disabled': disabled}, {'mdc-switch--checked': checked})} ref={this.switchRef}>
                    <div className="mdc-switch__track"/>
                    <div className="mdc-switch__thumb-underlay">
                        <div className="mdc-switch__thumb">
                            <input type="checkbox" className="mdc-switch__native-control" role="switch" checked={checked}/>
                        </div>
                    </div>
                </div>
                <label htmlFor={htmlFor}>{label}</label>
            </div>
        )
    }
}

export default Switch;