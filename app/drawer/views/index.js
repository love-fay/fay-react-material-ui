import React from 'react';
import TopBar from '../../../components/drawer/top-bar';
import Button from '../../../components/button';

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

    toGithub = () => {
        window.location.href = 'https://github.com/love-fay/fay-react-material-ui';
    };

    render(){
        const {children} = this.props;
        return (
            <TopBar list={this.list} topBarTitle='Fay React Material' topBarRight={<Button onClick={this.toGithub} iconType='github' style={{color: '#FFFFFF'}}>GitHub</Button>} open header={{title: 'Fay', subtitle:'869770665@qq.com'}}>
                {children}
            </TopBar>
        )
    }
}

export default Drawer;