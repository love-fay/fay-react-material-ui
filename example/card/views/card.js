import React from 'react';
import '../style/card.scss';
import {MDCRipple} from '@material/ripple';
import Icon from '../../icon';
import classnames from 'classnames';


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
                        <button className="mdc-button mdc-card__action mdc-card__action--button">Action 1</button>
                        <button className="mdc-button mdc-card__action mdc-card__action--button">Action 2</button>
                    </div>
                    <div className="mdc-card__action-icons">
                        <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                                title="Share">share
                        </button>
                        <button className="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon"
                                title="More options">more_vert
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Demo;