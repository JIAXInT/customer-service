import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useClientStore = defineStore(
  "client",
  () => {
    const clients = ref([
      {
        id: "user1000",
        imgUrl: "https://pic.616pic.com/ys_img/00/04/44/tTYRjRdx91.jpg",
        name: "游客1",
        phone: "13245678956",
        online: true,
        remark: "",
        chatHistory: [
          {
            id: "kefu123",
            msgType: "text",
            content: "你好我是客服",
            imgUrl: "https://img95.699pic.com/photo/50122/6771.jpg_wh300.jpg",
            time: 1711526160846,
          },
          {
            id: "user2653",
            msgType: "text",
            content: "你好 我想咨询",
            imgUrl: "https://pic.616pic.com/ys_img/00/04/44/tTYRjRdx91.jpg",
            time: 1711526289767,
          },
          {
            id: "kefu123",
            msgType: "text",
            content: "你好 ",
            imgUrl: "https://img95.699pic.com/photo/50122/6771.jpg_wh300.jpg",
            time: 1711527034671,
          },
        ],
      },
      {
        id: "user1001",
        imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.6SLDD8PuuLip0W5fukTzQgAAAA?w=167&h=180&c=7&r=0&o=5&pid=1.7",
        name: "游客2",
        phone: "13200002356",
        online: false,
        remark: "",
        chatHistory: [
          {
            id: "kefu123",
            msgType: "text",
            content: "你好我是客服",
            imgUrl: "https://img95.699pic.com/photo/50122/6771.jpg_wh300.jpg",
            time: 1711526160846,
          },
          {
            id: "user2653",
            msgType: "text",
            content: "你好 ",
            imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.6SLDD8PuuLip0W5fukTzQgAAAA?w=167&h=180&c=7&r=0&o=5&pid=1.7",
            time: 1711526289767,
          },
          {
            id: "kefu123",
            msgType: "text",
            content: "你好 说出你的想法",
            imgUrl: "https://img95.699pic.com/photo/50122/6771.jpg_wh300.jpg",
            time: 1711527034671,
          },
        ],
      },
      {
        id: "user1002",
        imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.W2PyevGvbmkHRGNdb00ZBwAAAA?w=211&h=211&c=7&r=0&o=5&pid=1.7",
        name: "游客3",
        phone: "13056668888",
        online: true,
        remark: "",
        chatHistory: [
          {
            id: "kefu123",
            msgType: "text",
            content: "你好我是客服",
            imgUrl: "https://img95.699pic.com/photo/50122/6771.jpg_wh300.jpg",
            time: 1711526160846,
          },
          {
            id: "user2653",
            msgType: "text",
            content: "品牌如何加盟 ",
            imgUrl: "https://tse1-mm.cn.bing.net/th/id/OIP-C.W2PyevGvbmkHRGNdb00ZBwAAAA?w=211&h=211&c=7&r=0&o=5&pid=1.7",
            time: 1711526289767,
          },
          {
            id: "kefu123",
            msgType: "text",
            content: "品牌这样加盟",
            imgUrl: "https://img95.699pic.com/photo/50122/6771.jpg_wh300.jpg",
            time: 1711527034671,
          },
        ],
      },
    ]);

    return { clients };
  },

  {
    persist: true,
  }
);
