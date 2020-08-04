import React, { useContext } from 'react'
import { withRouter } from 'react-router-dom'
import { Layout, Menu, Dropdown, message } from 'antd';
import { Breadcrumb } from 'antd';
import { Collapsed } from '../../../store/context'
import menuList from '../../../config/menuConfig.jsx'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  UserOutlined,
  SettingOutlined,
  LogoutOutlined
} from '@ant-design/icons';
import storageUtils from '../../../utils/storageUtils'
import './headPro.css'
const { Header } = Layout;

function HeaderPro(props) {
  const { toggleCollapsed } = props
  const collapsed = useContext(Collapsed);
  const user = storageUtils.getUser()
  const { location } = props;
  const key = location.pathname
  let breadcrumbSet = (list) => {
    return list.reduce((pre, item, index, arr) => {
      if (key.includes(item.path)) {
        // console.log(item.path)
        pre.push(
          <Breadcrumb.Item key={item.path}>
            <span>{item.icon}</span>
            <span style={{ paddingLeft: 5 }}>{item.title}</span>
          </Breadcrumb.Item>
        )
        if (key.split('/').length - 1 >= 2) {
          console.log(3)
          item.children.forEach(n => {
            if (key.includes(n.path)) {
              pre.push(
                <Breadcrumb.Item key={n.path}>
                  <span>{n.icon}</span>
                  <span style={{ paddingLeft: 5 }}>{n.title}</span>
                </Breadcrumb.Item>
              )
            }
          })
          console.log(item.children);
          // item.children && breadcrumbSet(item.children)
        }
      }
      // else if (item.children) {
      //   console.log(3)
      //   // console.log(item.children.reduce)
      //   // breadcrumbSet(item.children)
      // }
      // console.log(pre)
      return pre
    }, [])
    //   return list.forEach(item => {
    //     console.log(1)
    //     if (item.path === key) {
    //       console.log(2)
    //       return <Breadcrumb.Item key={item.path}>
    //         {item.icon}
    //         <span style={{ paddingLeft: 5 }}>{item.title}</span>
    //       </Breadcrumb.Item>
    //     }
    //     else if (item.children) {
    //       console.log(3)
    //       console.log(item.children)
    //       // { breadcrumbSet(item.childre) }
    //     }
    // })
  }

  // let pageName = ''
  // menuList.forEach(n => {
  //   if (n.path == key) {
  //     pageName = n.title
  //   }
  //   else if (n.children) {
  //     n.children.forEach(m => {
  //       if (m.path == key) {
  //         pageName = n.title + '/' + m.title
  //       }
  //     })
  //   }
  // })
  // console.log(pageName)

  function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" icon={<UserOutlined />}>
        个人中心
      </Menu.Item>
      <Menu.Item key="2" icon={<SettingOutlined />}>
        个人设置
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" icon={<LogoutOutlined />}>
        退出登录
      </Menu.Item>
    </Menu>
  );
  return <>
    <Header className="site-layout-sub-header-background" style={{ padding: '0 24px' }} >
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: toggleCollapsed,
      })}
      <span className="pageName">
        <Breadcrumb>
          {breadcrumbSet(menuList)}
        </Breadcrumb>
      </span>


      <Dropdown overlay={menu} trigger={['click']} placement="bottomLeft" >
        <div>
          <span style={{ padding: '0 10px' }}>{user.username}</span>
          <DownOutlined />
        </div>
      </Dropdown>

    </Header>
  </>
}

export default withRouter(HeaderPro)