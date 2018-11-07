/**
 * Create by fay on 2018-11-02 20:52
 */
import React from 'react';
import Tab from '../../../components/tab';
import TabBar from '../../../components/tab/tab-bar';
import TabScroller from '../../../components/tab/tab-scroller';

class Tabs extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            active: false
        }
    }

    onActive = () => {
        this.setState({
            active: !this.state.active
        })
    };

    tabs = [
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        }
    ];

    tabs2 = [
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        },
        {
            label: 'Favorites',
            iconType: 'tab'
        }
    ];

    onActive2 = (item, i) => {
        console.log(item, i);
    };

    render(){
        return (
            <div>
                {/*<Tab onClick={this.onActive} active={this.state.active} label='Favorites' iconType='tab'/>*/}
                <TabBar tabs={this.tabs} active={2} onActive={this.onActive2}/>
                <TabBar tabs={this.tabs} active={2} onActive={this.onActive2} stacked={true}/>
                {/*<TabBar tabs={this.tabs2} active={2} onActive={this.onActive2}/>*/}
                {/*<TabScroller active={2} onActive={this.onActive2} tabs={this.tabs}/>*/}
            </div>
        )
    }
}

export default Tabs;