import React, { Component } from 'react';
import menuConfig from '../../config/menuConfig'
import { Menu, Icon } from 'antd';
import {Link,NavLink} from 'react-router-dom'
import './navleft.less'
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    constructor() {
        super()
        this.state = {
            menuTree: []
        }
    }
    componentWillMount() {
        const menuTree = this.rederMenu(menuConfig)
        this.setState({
            menuTree
        })
    }

    rederMenu = (data) => {
        return data.map(ele => {
            if(ele.children){
                return  <SubMenu key={ele.key} title={ <span>{ele.title}</span>}>
                           {this.rederMenu(ele.children)}
                </SubMenu>
            }
            return <Menu.Item key={ele.key} title={ele.title}>
                <Link to={ele.key}>{ele.title}</Link>
            </Menu.Item>
        })
    }


    render() {
        const { menuTree } = this.state
        return (
            <div className="menu-left">
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt="" />
                    <h1>CH Learn</h1>
                </div>
                <Menu theme="dark" >
                    {menuTree}
                </ Menu >
            </div>
        )
    }
}