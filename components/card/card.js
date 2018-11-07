import React from 'react';
import './style/card.scss';
import {MDCRipple} from '@material/ripple';
import classnames from 'classnames';
import IconButton from '../button/icon-button'
import Button from '../button'


class Demo extends React.Component{

    constructor(props){
        super(props);
        // this.button = React.createRef();
    }

    componentDidMount(){
        // MDCRipple.attachTo(this.button.current);
    }

    render(){
        const {iconType, disabled, raised, className, children, buttonType, unelevated, outlined, dense, rippleUnbounded} = this.props;
        return (
            <div className="mdc-card">
                <div className="mdc-card__media mdc-card__media--square">
                    <div className="mdc-card__media-content">Title</div>
                </div>
                <div className="mdc-card__actions">
                    <div className="mdc-card__action-buttons">
                        <Button className="mdc-card__action mdc-card__action--button">Action 1</Button>
                        <Button className="mdc-card__action mdc-card__action--button">Action 2</Button>
                    </div>
                    <div className="mdc-card__action-icons">
                        <IconButton className="mdc-card__action mdc-card__action--icon" title="Share" iconType='share'/>
                        <IconButton className="mdc-card__action mdc-card__action--icon" title="More options" iconType='more_vert'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Demo;