import { Layout, Menu } from "antd";
const { Header } = Layout;

const MyHeader = () => {
  return (
    <div>
      <Header className="header">
        <div className="logo">
          <img src="https://i.loli.net/2020/04/19/tULfqE89AaHe6lN.png" alt="" />
        </div>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};
export default MyHeader;
