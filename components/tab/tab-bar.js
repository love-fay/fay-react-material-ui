/**
 * Create by fay on 2018-11-02 21:54
 */
import React from 'react';
import './style/tab-bar.scss';
import {MDCTabBar} from '@material/tab-bar';
import TabScroller from './tab-scroller';

class TabBar extends React.Component{

    constructor(props){
        super(props);
        this.tabBarRef = React.createRef();
    }

    componentDidMount(){
        const tabBar = MDCTabBar.attachTo(this.tabBarRef.current);
    }

    render(){
        const {stacked, onActive, active, tabs} = this.props;
        return (
            <div>
                <div className="mdc-tab-bar" role="tablist" ref={this.tabBarRef}>
                    <TabScroller tabs={tabs} active={active} onActive={onActive} stacked={stacked}/>
                </div>
            </div>
        )
    }
}

export default TabBar;