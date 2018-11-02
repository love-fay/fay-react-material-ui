import React from 'react';
import Drawer from '../../../components/drawer';
import TopBar from '../../../components/drawer/top-bar';

class Demo extends React.Component{

    render(){
        const basicUsage = [{
            sublist: [
                {graphic: 'inbox', text: 'Inbox', selected: true},
                {graphic: 'star', text: 'Outgoing'},
                {graphic: 'send', text: 'Outgoing'},
                {graphic: 'drafts', text: 'Drafts'}
            ]
        }];
        const separate = [
            {
                subheader: 'sub1',
                sublist: [
                    {graphic: 'inbox', text: 'Inbox', selected: true},
                    {graphic: 'star', text: 'Outgoing'},
                    {graphic: 'send', text: 'Outgoing'},
                    {graphic: 'drafts', text: 'Drafts'}
                ],
                separate: true
            },
            {
                subheader: 'sub2',
                sublist: [
                    {graphic: 'inbox', text: 'Inbox', selected: true},
                    {graphic: 'star', text: 'Outgoing'},
                    {graphic: 'send', text: 'Outgoing'},
                    {graphic: 'drafts', text: 'Drafts'}
                ]
            }
        ];
        // const separate = [{subheader: list:basicUsage}, {list:basicUsage}];
        return (
            <div>
                {/*<Drawer list={basicUsage}/>*/}
                {/*<Drawer list={separate}/>*/}
                {/*<Drawer list={basicUsage} header={{title: 'MAIL', subtitle:'email@material.io'}}/>*/}
                {/*<br/>*/}
                {/*<DrawerDismissible/>*/}
                {/*<br/>*/}
                {/*<hr/>*/}
                {/*<br/>*/}
                {/*<DrawerTopbar list={basicUsage}/>*/}
                <TopBar list={basicUsage} topBarTitle='Dismissible Drawer' open>
                    my content
                </TopBar>
                {/*<TopBar list={basicUsage} topBarTitle='Dismissible Drawer' open/>*/}
                    {/*my content*/}
                {/*</DrawerModal>*/}
            </div>
        )
    }
}

export default Demo;