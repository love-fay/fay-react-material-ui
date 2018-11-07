/**
 * Create by fay on 2018-11-02 20:52
 */
import React from 'react';
import ImageList from '../../../components/image-list';

const data = [
    {
        imgSrc: 'assets/lol/daomei.jpg',
        label: '刀妹'
    },
    {
        imgSrc: 'assets/lol/liulang.jpg',
        label: '流浪'
    },
    {
        imgSrc: 'assets/lol/lucian.jpg',
        label: '卢锡安'
    },
    {
        imgSrc: 'assets/lol/ruiwen.jpg',
        label: '瑞文'
    },
    {
        imgSrc: 'assets/lol/xiazi.jpg',
        label: '瞎子'
    },
    {
        imgSrc: 'assets/lol/yaoji.jpg',
        label: '妖姬'
    },
    {
        imgSrc: 'assets/lol/yasuo.jpg',
        label: '亚索'
    },
    {
        imgSrc: 'assets/lol/jianji.jpeg',
        label: '剑姬'
    },
    {
        imgSrc: 'assets/lol/naer.jpeg',
        label: '纳尔'
    },
    {
        imgSrc: 'assets/lol/huangzi.jpeg',
        label: '皇子'
    },
    {
        imgSrc: 'assets/lol/delaiwen.jpeg',
        label: '德莱文'
    },
    {
        imgSrc: 'assets/lol/xiaopao.jpeg',
        label: '小炮'
    },
    {
        imgSrc: 'assets/lol/ali.jpg',
        label: '阿狸'
    },
    {
        imgSrc: 'assets/lol/chuishi.jpeg',
        label: '锤石'
    },
    {
        imgSrc: 'assets/lol/dashu.jpeg',
        label: '大树'
    },
    {
        imgSrc: 'assets/lol/ez.jpeg',
        label: 'EZ'
    },
    {
        imgSrc: 'assets/lol/jiansheng.jpeg',
        label: '剑圣'
    },
    {
        imgSrc: 'assets/lol/langren.jpeg',
        label: '狼人'
    },
    {
        imgSrc: 'assets/lol/laoniu.jpeg',
        label: '老牛'
    },
    {
        imgSrc: 'assets/lol/laoshu.jpeg',
        label: '老鼠'
    },
    {
        imgSrc: 'assets/lol/nandao.jpeg',
        label: '男刀'
    },
    {
        imgSrc: 'assets/lol/nanqiang.jpeg',
        label: '男枪'
    },
    {
        imgSrc: 'assets/lol/qinnv.jpeg',
        label: '琴女'
    },
    {
        imgSrc: 'assets/lol/rinv.jpg',
        label: '日女'
    },
    {
        imgSrc: 'assets/lol/taitan.jpeg',
        label: '泰坦'
    },
    {
        imgSrc: 'assets/lol/timo.jpg',
        label: '提莫'
    },
    {
        imgSrc: 'assets/lol/vn.jpeg',
        label: '薇恩'
    }
];

class Demo extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <ImageList data={data}/>
                <ImageList data={data} masonry/>
            </div>
        )
    }
}

export default Demo;