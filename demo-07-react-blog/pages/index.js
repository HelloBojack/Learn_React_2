import { Layout } from "antd";
import axios from 'axios';
import MyHeader from "../components/MyHeader";
import MyContent from "../components/MyContent";
import MyFooter from "../components/MyFooter";
import { useState } from 'react'

export const TestContext = React.createContext();

const Home = (props) => {
  const [datalist, setdatalist] = useState(props.data)
  return (
    <div>
      <Layout>
        <MyHeader></MyHeader>
        {/* <div>111{datalist[0].title}</div> */}
        <TestContext.Provider value={datalist} >
          <MyContent></MyContent>
        </TestContext.Provider>
        <MyFooter></MyFooter>
      </Layout>
    </div>
  )
}

Home.getInitialProps = async () => {
  const promise = new Promise((resolve) => {
    axios('http://127.0.0.1:7001/article').then(
      (res) => {
        console.log(res.data);
        resolve(res.data)
      }
    )
  })
  return await promise
}

export default Home;
