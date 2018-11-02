/**
 * Created by feichongzheng on 17/10/13.
 */
import React from 'react';
import Loadable from 'fay-react-lib/loadable';

export default (props) => <Loadable loader={{
    view: () => import(/* webpackChunkName: "FayReactMaterialUiExampleDialog" */'./views')
}} props={props}/>;