import "antd/dist/antd.min.css";
import { Dashboard } from "./Dashboard/Dashboard";
import { Layout } from "antd";
import useMobile from "./customHook/useMobile";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Delete from "./Dashboard/Sucess/Delete";

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
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/delete/:id" element={<Delete />} />
            </Routes>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
