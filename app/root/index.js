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
import Icon from '../../example/icon';
import Tab from '../../example/tab';
import Checkbox from '../../example/checkbox';
import FloatingLabel from '../../example/floating-label';
import TextField from '../../example/text-field';
import Elevation from '../../example/elevation';
import GridList from '../../example/grid-list';
import ImageList from '../../example/image-list';
import Switch from '../../example/switch';
import Slider from '../../example/slider';
import LinearProgress from '../../example/linear-progress';
import Card from '../../example/card';
import './style/index.scss';

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
            'icon': <Drawer><Icon/></Drawer>,
            'tab': <Drawer><Tab/></Drawer>,
            'checkbox': <Drawer><Checkbox/></Drawer>,
            'floating-label': <Drawer><FloatingLabel/></Drawer>,
            'text-field': <Drawer><TextField/></Drawer>,
            'elevation': <Drawer><Elevation/></Drawer>,
            'grid-list': <Drawer><GridList/></Drawer>,
            'image-list': <Drawer><ImageList/></Drawer>,
            'switch': <Drawer><Switch/></Drawer>,
            'slider': <Drawer><Slider/></Drawer>,
            'linear-progress': <Drawer><LinearProgress/></Drawer>,
            'card': <Drawer><Card/></Drawer>,
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