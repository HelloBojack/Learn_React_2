import { Layout } from "antd";

import MyHeader from "../components/MyHeader";
import MyContent from "../components/MyContent";
import MyFooter from "../components/MyFooter";
import ArticleDetail from "../components/ArticleDetail";
import axios from 'axios'
import { useState } from 'react'

export const ArticleContent = React.createContext();

const Detail = (props) => {
  const [AContent, setAConten] = useState(props.data)
  return (
    < div  >
      <Layout>
        <MyHeader></MyHeader>
        <ArticleContent.Provider value={AContent[0]} >
          <ArticleDetail></ArticleDetail>
        </ArticleContent.Provider>
        <MyFooter></MyFooter>
      </Layout>
    </ div>
  )
};
Detail.getInitialProps = async (context) => {
  // console.log(context.query.id)
  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/article/' + id).then(
      (res) => {
        // console.log(res.data)
        resolve(res.data)
      }
    )
  })
  return await promise
}
export default Detail;
