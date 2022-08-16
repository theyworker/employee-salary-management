import "./App.css";
import "antd/dist/antd.min.css";
import { Dashboard } from "./Dashboard/Dashboard";
import { Layout } from "antd";
import useMobile from "./customHook/useMobile";
import React from "react";

const { Header, Footer, Sider, Content } = Layout;
function App() {
  const isMobile = useMobile();
  return (
    <div className="App">
      <Layout>
        {isMobile ? <React.Fragment /> : <Sider>Sider</Sider>}
        <Layout>
          <Header>Header</Header>
          <Content>
            <Dashboard />
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
