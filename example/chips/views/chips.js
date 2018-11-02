/**
 * Create by fay on 2018-11-01 23:35
 */
import React from 'react';
import Chips from '../../../components/chips';
import '../style/index.scss';

class Demo extends React.Component{

    render(){
        const chipGroup = [
            {content:'Chip content'},
            {content:'Add to calendar', leadingIconType:'calendar'},
            {content:'Jane Smith', trailingIconType:'close'},
            {content:'choice'},
            {content:'choice', filterIconType:'smile-o'},
            {content:'choice', leadingIconType:'calendar', filterIconType:'smile-o'}
        ];
        return (
            <div>
                {/*<Chips chipGroup={chipGroup}/>*/}
                {/*<Chips chipGroup={chipGroup}/>*/}
                {/*<Chips chipGroup={chipGroup}/>*/}
                <Chips chipGroup={chipGroup}/>
                <Chips chipGroup={chipGroup} choice/>
                {/*<Chips chipGroup={chipGroup} input/>*/}
                {/*<Chips chipGroup={chipGroup} choice filter/>*/}
                {/*<Chips chipGroup={chipGroup} filter/>*/}
            </div>
        )
    }
}

export default Demo;