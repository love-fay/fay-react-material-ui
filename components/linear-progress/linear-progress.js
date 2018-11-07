import React from 'react';
import './style/linear-progress.scss';
import Icon from '../icon';
import classnames from 'classnames';
import {MDCLinearProgress} from '@material/linear-progress';

class LinearProgress extends React.Component{

    constructor(props){
        super(props);
        this.linearProgressRef = React.createRef();
    }

    componentDidMount(){
        const linearProgress = MDCLinearProgress.attachTo(this.linearProgressRef.current);
    }

    render(){
        const {indeterminate, reversed, closed, htmlFor, ...props} = this.props;
        return (
            <div role="progressbar" className={classnames("mdc-linear-progress", {'mdc-linear-progress--indeterminate':indeterminate}, {'mdc-linear-progress--reversed':reversed}, {'mdc-linear-progress--closed':closed})} ref={this.linearProgressRef}>
                <div className="mdc-linear-progress__buffering-dots"></div>
                <div className="mdc-linear-progress__buffer"></div>
                <div className="mdc-linear-progress__bar mdc-linear-progress__primary-bar">
                    <span className="mdc-linear-progress__bar-inner"></span>
                </div>
                <div className="mdc-linear-progress__bar mdc-linear-progress__secondary-bar">
                    <span className="mdc-linear-progress__bar-inner"></span>
                </div>
            </div>
        )
    }
}

export default LinearProgress;