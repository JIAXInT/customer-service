<script setup>
import { ref, onUpdated } from "vue";
import formatDate from "@/utils/formatDate.js";
import emoji from "@/assets/emoji.js";
import scrollToBottom from "@/utils/scrollToBottom.js";
import { socket } from "@/socket";
import { useClientStore } from "@/stores/client.js";

// 取到客户数据
const clientStore = useClientStore();
const { clients } = clientStore;

console.log(clients);

const emojiBoxShow = ref(false);
const emojiArr = emoji.split(",");

const activeIndex = ref(0); //当前选中的index
const currentClient = ref(clients[0]);

onUpdated(() => {
  scrollToBottom();
});

const text = "text";

const user = {
  id: "kefu123",
  imgUrl: "https://img95.699pic.com/photo/50122/6771.jpg_wh300.jpg",
  name: "客服",
};

const chatHistory = ref(clients[0].chatHistory);

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
  socket.emit("customer message", JSON.stringify(newMsg));
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

const onUserlistClick = (item, index) => {
  chatHistory.value = item.chatHistory;
  activeIndex.value = index;
  currentClient.value = item;

  console.log(item.chatHistory[item.chatHistory.length - 1].content);
};
</script>

<template>
  <div class="chat" style="max-width: 1200px; max-height: 800px">
    <div class="chat__header">在线客服</div>
    <div class="chat__content">
      <div class="chat__content__list">
        <ul id="userList">
          <template v-for="(item, index) in clients" :key="clients.id">
            <li :class="{ active: activeIndex === index }" @click="onUserlistClick(item, index)">
              <div class="author">
                <span class="status" :class="{ active: item.online }"></span>
                <!-- <i class="msgs"></i> -->
                <img :src="item.imgUrl" alt="" />
              </div>
              <div class="name">
                <span>{{ item.name }}</span>
                <p>{{ item.chatHistory[item.chatHistory.length - 1].content }}</p>
              </div>
              <div class="time">{{ formatDate(item.chatHistory[item.chatHistory.length - 1].time) }}</div>
            </li>
          </template>
        </ul>
      </div>
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
              <input type="file" id="file" accept="image/*" @change="onImgSelected" />
            </div>
          </div>
          <textarea v-model="textareaMsg" cols="30" rows="10" @keydown.enter="submit(text, textareaMsg)"></textarea>
          <button id="button" @click="submit(text, textareaMsg)">发送</button>
        </div>
      </div>
      <div class="chat__content__sidebar">
        <div class="name">
          <div class="avatar">
            <img :src="currentClient.imgUrl" alt="" />
          </div>
          <span id="authorName">{{ currentClient.name }}</span>
          <input type="text" id="editAuthorName" v-model="currentClient.name" style="display: none" name="" />
        </div>

        <div class="user__info">
          <div class="info__item">
            <div class="item__title">电话</div>
            <div class="item__content">
              <span id="authorPhone">{{ currentClient.phone }}</span>
              <input type="number" id="editAuthorPhone" v-model="currentClient.phone" style="display: none" name="" />
            </div>
          </div>
          <div class="info__item">
            <div class="item__title">备注</div>
            <div class="item__content">
              <span id="remark">{{ currentClient.remark }}</span>
              <input type="text" id="editRemark" v-model="currentClient.remark" style="display: none" name="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
