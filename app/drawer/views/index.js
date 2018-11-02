import React from 'react';
import TopBar from '../../../components/drawer/top-bar';

class Drawer extends React.Component{

    list = [
        {
            subheader: 'components',
            sublist: [
                {graphic: 'typography', text: 'Typography', href: '/typography'},
                {graphic: 'button', text: 'Button', href: '/button'},
                {graphic: 'chips', text: 'Chips', href: '/chips'},
                {graphic: 'dialog', text: 'Dialogs', href: '/dialog'},
                {graphic: 'drawer', text: 'Drawers', href: '/drawer'},
                {graphic: 'layout', text: 'Layout Grid', href: '/layout-grid'},
                {graphic: 'list', text: 'Lists', href: '/list'},
                {graphic: 'menu', text: 'Menus', href: '/menu'}
            ],
        }

    ];

    render(){
        const {children} = this.props;
        return (
            <TopBar list={this.list} topBarTitle='Fay React Material' open header={{title: 'Fay', subtitle:'869770665@qq.com'}}>
                {children}
            </TopBar>
        )
    }
}

export default Drawer;