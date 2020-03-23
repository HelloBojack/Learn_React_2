import { Layout } from "antd";

import MyHeader from "../components/MyHeader";
import MyContent from "../components/MyContent";
import MyFooter from "../components/MyFooter";

const Home = () => (
  <div>
    <Layout>
      <MyHeader></MyHeader>
      <MyContent></MyContent>
      <MyFooter></MyFooter>
    </Layout>
  </div>
);

export default Home;
