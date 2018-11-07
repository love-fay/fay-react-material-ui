/**
 * Create by fay on 2018-11-02 21:54
 */
import React from 'react';
import './style/tab-scroller.scss';
import {MDCTab} from '@material/tab';
import {MDCTabScroller} from '@material/tab-scroller';
import Icon from '../icon';
import classnames from 'classnames';
import Tab from './tab';

class TabScroller extends React.Component{

    constructor(props){
        super(props);
        this.tabScrollerRef = React.createRef();
    }

    componentDidMount(){
        this.tab = MDCTabScroller.attachTo(this.tabScrollerRef.current);
    }

    onTabClick = (item, i) => {
        this.tab.scrollTo(i);
        this.props.onActive && this.props.onActive(item, i);
    };

    render(){
        const {active=0, fade=false, stacked, tabs, onActive, ...props} = this.props;
        const tabsContent = tabs.map((item, i) => {
            const {iconType, label} = item;
            return <Tab label={label} iconType={iconType} active={active===i+1} onClick={()=>this.onTabClick(item, i)} key={i} fade={fade} stacked={stacked}/>;
        });
        return (
            <div {...props} className="mdc-tab-scroller" ref={this.tabScrollerRef}>
                <div className="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area-scroll">
                    <div className="mdc-tab-scroller__scroll-content">
                        {tabsContent}
                    </div>
                </div>
            </div>
        )
    }
}

export default TabScroller;