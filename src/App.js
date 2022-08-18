import "antd/dist/antd.min.css";
import { Dashboard } from "./Dashboard/Dashboard";
import { Layout } from "antd";
import useMobile from "./customHook/useMobile";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Delete from "./Dashboard/Sucess/Delete";
import UserUpload from "./Dashboard/UserUpload/UserUpload";
import Menu from "./Menu/Menu";
import MobileHeader from "./Menu/MobileHeader";


const { Header, Footer, Sider, Content } = Layout;
function App() {
  const isMobile = useMobile();
  return (
    <div className="App">
      <Layout style={{width:'100vw', height:'100vh'}}>
        {isMobile ? (
          <React.Fragment />
        ) : (
          <Sider>
            <Menu />
          </Sider>
        )}
        <Layout>
         {isMobile? <Header><MobileHeader/></Header> : <React.Fragment/>}
          <Content>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/delete/:id" element={<Delete />} />
              <Route path="/upload" element={<UserUpload />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
