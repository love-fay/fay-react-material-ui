import React from 'react';
import {withRouter} from 'react-router-dom';
import Common from './common';
import ComingSoon from 'fay-react-ui/res/business/comingSoon';
import Home from '../home';
import Button from '../../example/button';
import LayoutGrid from '../../example/layout-grid';
// import Card from '../card';
import Chips from '../../example/chips';
import Typography from '../../example/typography';
import Drawer from '../drawer';
import List from '../../example/list';
import Dialog from '../../example/dialog';

class Root extends React.Component{

    render(){
        const {location} = this.props;
        const {pathname} = location;
        const pathPrefix = pathname.split('/')[1];
        const router = {
            'button': <Drawer><Button/></Drawer>,
            'layout-grid': <Drawer><LayoutGrid/></Drawer>,
            // 'floatingActionButton': <FloatingActionButton/>,
            // 'iconButton': <IconButton/>,
            // 'card': <Card/>,
            'chips': <Drawer><Chips/></Drawer>,
            'dialog': <Drawer><Dialog/></Drawer>,
            'typography': <Drawer><Typography/></Drawer>,
            'drawer': <Drawer><Drawer/></Drawer>,
            'list': <Drawer><List/></Drawer>,
            'comingSoon': <Drawer><ComingSoon/></Drawer>,
            '': <Drawer><Home/></Drawer>,
        };
        return (
            <div style={{height: '100%'}}>
                {router[pathPrefix] || router['comingSoon']}
                <Common/>
            </div>
        )
    }
}


export default withRouter(Root);