/**
 * Create by fay on 2018-10-31 15:33
 */
import React from 'react';
import Icon from '../icon';
import classnames from 'classnames';
import {withRouter, Link} from 'react-router-dom';

export default withRouter(({data, location}) => {
    const {pathname} = location;
    return data.map((item, i) => {
        const {subheader, sublist, separate} = item;
        const subContent = sublist.map((subItem, j)=>{
            const {graphic, href, text, selected} = subItem;

            return (
                <Link className={classnames("mdc-list-item", {"mdc-list-item--activated":selected || pathname === href})} to={href} aria-selected={selected || pathname === href} key={j}>
                    <Icon className="mdc-list-item__graphic" type={graphic}/>
                    <span className="mdc-list-item__text">{text}</span>
                </Link>
            )
        });
        return [
            subheader && <h6 className="mdc-list-group__subheader" key={'subheader'+i}>{subheader}</h6>,
            subContent,
            separate && <hr className="mdc-list-divider" key={'divider'+i}/>
        ]
    })

});