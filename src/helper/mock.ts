export const mockMindData = {
  // 元数据，定义思维导图的名称、作者、版本等信息
  meta: {
    name: "minimind",
    author: "jacksonzhou52017@gmail.com",
    version: "0.1",
  },
  // 数据格式
  format: "node_tree",
  data: {
    id: "root",
    topic: "minimind",
    children: [
      {
        id: "easy",
        topic: "Easy",
        direction: "left",
        expanded: false,
        children: [
          { id: "easy1", topic: "Easy to show" },
          { id: "easy2", topic: "Easy to edit" },
          { id: "easy3", topic: "Easy to store" },
          { id: "easy4", topic: "Easy to embed" },
        ],
      },
      {
        id: "open",
        topic: "Open Source",
        direction: "right",
        expanded: true,
        children: [
          { id: "open1", topic: "on GitHub" },
          { id: "open2", topic: "BSD License" },
        ],
      },
      {
        id: "powerful",
        topic: "Powerful",
        direction: "right",
        children: [
          { id: "powerful1", topic: "Base on Javascript" },
          { id: "powerful2", topic: "Base on HTML5" },
          { id: "powerful3", topic: "Depends on you" },
        ],
      },
      {
        id: "other",
        topic: "test node",
        direction: "left",
        children: [
          { id: "other1", topic: "I'm from local variable" },
          { id: "other2", topic: "I can do everything" },
        ],
      },
    ],
  },
};

export const mockMindData2 = {
  meta: {
    name: "minimind",
    author: "jacksonzhou52017@gmail.com",
    version: "0.1",
  },
  format: "node_array",
  data: [
    { id: "root", isroot: true, topic: "minimind" },

    {
      id: "sub1",
      parentid: "root",
      topic: "sub1",
      "background-color": "#0000ff",
    },
    { id: "sub11", parentid: "sub1", topic: "sub11" },
    { id: "sub12", parentid: "sub1", topic: "sub12" },
    { id: "sub13", parentid: "sub1", topic: "sub13" },

    { id: "sub2", parentid: "root", topic: "sub2" },
    { id: "sub21", parentid: "sub2", topic: "sub21" },
    {
      id: "sub22",
      parentid: "sub2",
      topic: "sub22",
      "foreground-color": "#33ff33",
    },

    { id: "sub3", parentid: "root", topic: "sub3" },
  ],
};
