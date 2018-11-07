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
                {graphic: 'menu', text: 'Menus', href: '/menu'},
                {graphic: 'smile_o', text: 'Icons', href: '/icon'},
                {graphic: 'tabs', text: 'Tabs', href: '/tab'},
                {graphic: 'checkbox_o', text: 'Checkboxes', href: '/checkbox'},
                {graphic: 'label', text: 'Floating Label', href: '/floating-label'},
                {graphic: 'text_field', text: 'Text Field', href: '/text-field'},
                {graphic: 'elevation', text: 'Elevation', href: '/elevation'},
                {graphic: 'grid_list', text: 'Grid List', href: '/grid-list'},
                {graphic: 'grid_list', text: 'Image List', href: '/image-list'},
                {graphic: 'switch', text: 'Switches', href: '/switch'},
                {graphic: 'slider', text: 'Sliders', href: '/slider'},
                {graphic: 'progress', text: 'Linear Progress', href: '/linear-progress'},
                {graphic: 'grid_list', text: 'Cards', href: '/card'}
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