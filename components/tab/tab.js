/**
 * Create by fay on 2018-11-02 21:54
 */
import React from 'react';
import './style/tab.scss';
import {MDCTab} from '@material/tab';
import Icon from '../icon';
import classnames from 'classnames';

class Tab extends React.Component{

    constructor(props){
        super(props);
        this.tabRef = React.createRef();
    }

    componentDidMount(){
        const tab = MDCTab.attachTo(this.tabRef.current);
    }

    render(){
        const {active, iconType, label, fade=true, stacked, ...props} = this.props;
        return (
            <button {...props} className={classnames("mdc-tab", {"mdc-tab--active":active}, {'mdc-tab--stacked': stacked})} role="tab" aria-selected={active?"true":"false"} tabIndex={active ? 0:  -1} ref={this.tabRef}>
                <span className="mdc-tab__content">
                    { iconType && <Icon type={iconType} className='mdc-tab__icon'/> }
                    <span className="mdc-tab__text-label">{label}</span>
                    {
                        stacked &&
                        <span className={classnames("mdc-tab-indicator", {"mdc-tab-indicator--active":active}, {"mdc-tab-indicator--fade":fade})}>
                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                        </span>
                    }
                </span>
                {
                    !stacked &&
                    <span className={classnames("mdc-tab-indicator", {"mdc-tab-indicator--active":active}, {"mdc-tab-indicator--fade":fade})}>
                            <span className="mdc-tab-indicator__content mdc-tab-indicator__content--underline"></span>
                        </span>
                }
                <span className="mdc-tab__ripple"></span>
            </button>
        )
    }
}

export default Tab;