import React, { useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

import { Button, Drawer } from "antd";
import Menu from "./Menu";

const MobileHeader = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };
  
    const onClose = () => {
      setVisible(false);
    };
  return (
    <div>
      <MenuOutlined style={{ color: "#fff" }} onClick={()=>showDrawer(true)}/>
      <Drawer
        title="Menu"
        placement="right"
        onClose={onClose}
        visible={visible}
      >
        <Menu handleClose={onClose}/>
      </Drawer>
    </div>
  );
};

export default MobileHeader;
