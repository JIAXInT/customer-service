<script setup>
import { ref, onUpdated } from "vue";
import formatDate from "@/utils/formatDate.js";
import emoji from "@/assets/emoji.js";
import scrollToBottom from "@/utils/scrollToBottom.js";
import { socket } from "@/socket";

const emojiBoxShow = ref(false);
const emojiArr = emoji.split(",");

onUpdated(() => {
  scrollToBottom();
});

const text = "text";

const user = {
  id: "user2653",
  imgUrl: "https://pic.616pic.com/ys_img/00/04/44/tTYRjRdx91.jpg",
  name: "客户",
};

const chatHistory = ref([
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
]);

const textareaMsg = ref("");

const submit = (type, msg) => {
  let newMsg = {
    id: user.id,
    msgType: type,
    pic: msg,
    content: msg,
    imgUrl: user.imgUrl,
    time: Date.now(),
  };
  socket.emit("client message", JSON.stringify(newMsg));
  textareaMsg.value = "";
};

socket.on("customer message", (msg) => {
  let newMsg = JSON.parse(msg);
  chatHistory.value.push(newMsg);
});

socket.on("client message", (msg) => {
  let newMsg = JSON.parse(msg);
  chatHistory.value.push(newMsg);
});

const onImgSelected = (event) => {
  const files = event.target.files;
  // 解析图片
  const file = files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    // 生成图片
    submit("pic", reader.result);
  };
};
</script>

<template>
  <div>
    <div class="chat">
      <div class="chat__header">在线客服</div>
      <div class="chat__content">
        <div class="chat__content__item">
          <div class="chat__container" id="scrollableDiv">
            <template v-for="(item, index) in chatHistory" :key="item.id">
              <!-- 判断item.time与上一次间隔五分钟再显示，第一次除外 -->
              <div class="time" v-if="index == 0 || item.time - chatHistory[index - 1].time > 300000">{{ formatDate(item.time) }}</div>
              <div class="message" :class="item.id == user.id ? 'right' : 'left'">
                <div class="author"><img :src="item.imgUrl" alt="" /></div>
                <div class="msg">
                  <img v-if="item.msgType == 'pic'" :src="item.pic" alt="" />
                  <p v-else>{{ item.content }}</p>
                </div>
              </div>
            </template>
          </div>
          <div class="chat__control">
            <div class="toolbar">
              <div class="toolbar__item">
                <span @click="emojiBoxShow = !emojiBoxShow"><img src="/emoji.svg" alt="" /></span>

                <div class="emoji__box" v-if="emojiBoxShow">
                  <template v-for="(item, index) in emojiArr" :key="index">
                    <div class="emoji__item" @click="textareaMsg += item">{{ item }}</div>
                  </template>
                </div>
              </div>
              <div class="toolbar__item">
                <span><img src="/photo.svg" alt="" /></span>
                <input type="file" accept="image/*" @change="onImgSelected" />
              </div>
            </div>
            <textarea v-model="textareaMsg" cols="30" rows="10" @keydown.enter="submit(text, textareaMsg)"></textarea>
            <button id="button" @click="submit(text, textareaMsg)">发送</button>
          </div>
        </div>
        <div class="chat__content__sidebar"></div>
      </div>

      <div class="chat__content liuyan" style="display: none">
        <form action="">
          <input type="text" placeholder="请输入您的姓名" />
          <input type="text" placeholder="请输入您的电话" />
          <textarea name="" id="" cols="30" rows="10" v-model="msg" placeholder="请填写留言内容"></textarea>
          <button>提交留言</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
