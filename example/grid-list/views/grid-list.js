/**
 * Create by fay on 2018-11-02 20:52
 */
import React from 'react';
import GridList from '../../../components/grid-list';

const data = [
    {
        imgSrc: 'assets/my-image.jpg',
        title: 'Title',
        supportText: 'Support text'
    },
    {
        imgSrc: 'assets/my-image.jpg',
        iconType: 'smile',
        title: 'Title',
        supportText: 'Support text'
    },
    {
        imgSrc: 'assets/my-image.jpg',
        iconType: 'smile',
        title: 'Title',
    },
    {
        imgSrc: 'assets/my-image.jpg',
    },
    {
        title: 'Title',
    }
];

class Demo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <GridList data={data}/>
                <GridList data={data} headerCaption/>
                <GridList data={data} twolineCaption/>
                <GridList data={data} headerCaption twolineCaption/>
                <GridList data={data} withIconAlign='start'/>
                <GridList data={data} withIconAlign='end'/>
                <GridList data={data} withIconAlign='end' aspectRatio='1x1'/>
                <GridList data={data} withIconAlign='end' aspectRatio='2x3'/>
                <GridList data={data} withIconAlign='end' aspectRatio='3x2'/>
                <GridList data={data} withIconAlign='end' aspectRatio='4x3'/>
                <GridList data={data} withIconAlign='end' aspectRatio='3x4'/>
                <GridList data={data} withIconAlign='end' aspectRatio='16x9'/>
            </div>
        )
    }
}

export default Demo;