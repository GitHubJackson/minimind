import { FileImageOutlined, SaveOutlined } from "@ant-design/icons";
// import { Divider } from "antd";
import styles from "./index.module.css";
import { Tooltip } from "antd";
import { useContext } from "react";
import { MindContext } from "../MindMap/context";
import "jsmind/screenshot";
import { saveAs } from "file-saver";

export function Header() {
  const mindContext = useContext(MindContext);
  const { jm } = mindContext;

  const exportImg = () => {
    jm.shoot();
  };

  const exportData = () => {
    const jsonData = jm.get_data();
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], {
      type: "application/json",
    });
    saveAs(blob);
  };

  return (
    <div className={styles["container"]}>
      <Tooltip title="导出图片">
        <FileImageOutlined className={styles["btn"]} onClick={exportImg} />
      </Tooltip>
      <Tooltip title="导出数据">
        <SaveOutlined className={styles["btn"]} onClick={exportData} />
      </Tooltip>
      {/* <Divider type="vertical"/> */}
    </div>
  );
}
