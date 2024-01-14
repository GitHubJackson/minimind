import jsMind from "jsmind";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Header } from "../Header";
// import { mockMindData } from "../../helper/mock";
import "jsmind/draggable-node";
import "jsmind/style/jsmind.css";
import styles from "./index.module.css";
import { MindContext } from "./context";
import { defaultMindData } from "../../helper/default";

function MindMap() {
  const [jsmind, setJsmind] = useState();

  useEffect(() => {
    const options = {
      container: "jsmindContainer",
      editable: true,
      theme: "asphalt",
    };
    const jm = new jsMind(options);
    jm.show(defaultMindData);
    setJsmind(jm);
    // 监听键盘事件
    window.addEventListener("keydown", (e) => {
      const key = e.key;
      switch (key) {
        case "Tab": {
          const currentNode = jm.get_selected_node();
          if (!currentNode) {
            return;
          }
          jm.add_node(currentNode, uuidv4(), "mininode");
          break;
        }
        case "Backspace": {
          const currentNode = jm.get_selected_node();
          if (!currentNode) {
            return;
          }
          jm.remove_node(currentNode);
          break;
        }
        default: {
          break;
        }
      }
    });
  }, []);

  return (
    <MindContext.Provider
      value={{
        jm: jsmind,
      }}
    >
      <div className={styles["container"]}>
        <Header />
        <div id="jsmindContainer" className={styles["jsmind-container"]}></div>
      </div>
    </MindContext.Provider>
  );
}

export default MindMap;
