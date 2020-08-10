import React, { useContext } from 'react'
import { Layout, Menu } from 'antd';
import { Link, withRouter } from 'react-router-dom'

import menuList from '../../../config/menuConfig.jsx'
import { Collapsed } from '../../../store/context'
import SubMenu from 'antd/lib/menu/SubMenu';
// const { SubMenu } = Menu;
import './leftNav.css'
const { Sider } = Layout;

function LeftNav(props) {
  const collapsed = useContext(Collapsed);
  const { location } = props;
  const navDefaultSelectedKeys = location.pathname
  const defaultOpenKeys = location.pathname.match(/(?=\/).*(?=\/)/)[0]

  const menuSet = (list) => {
    return list.reduce((pre, item) => {
      if (!item.children) {
        pre.push(
          <Menu.Item key={item.path} icon={item.icon} >
            <Link to={item.path}>
              {item.title}
            </Link>
          </Menu.Item>
        )
      }
      else {
        pre.push(
          <SubMenu
            key={item.path}
            icon={item.icon}
            title={item.title}
          >
            {menuSet(item.children)}
          </SubMenu >
        )
      }
      return pre
    }, [])

  }

  return <>
    <Sider
      // breakpoint="lg"
      // collapsedWidth="0"
      // onBreakpoint={broken => {
      //   console.log(broken);
      // }}
      // onCollapse={(collapsed, type) => {
      //   console.log(collapsed, type);
      // }}
      // trigger={collapsed}
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo" />
      <Menu theme="dark" mode="inline"
        defaultSelectedKeys={[navDefaultSelectedKeys]}
        defaultOpenKeys={[defaultOpenKeys]}
      >
        {
          menuSet(menuList)
        }
      </Menu>
    </Sider>
  </>
}

export default withRouter(LeftNav)