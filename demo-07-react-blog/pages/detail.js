import { Layout } from "antd";

import MyHeader from "../components/MyHeader";
import MyContent from "../components/MyContent";
import MyFooter from "../components/MyFooter";
import ArticleDetail from "../components/ArticleDetail";

const Detail = () => (
  <div>
    <Layout>
      <MyHeader></MyHeader>
      <ArticleDetail></ArticleDetail>
      <MyFooter></MyFooter>
    </Layout>
  </div>
);

export default Detail;
