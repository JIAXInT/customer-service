<script setup></script>

<template>
  <div>
    <div class="chat">
      <div class="chat__header">在线客服</div>
      <div class="chat__content">
        <div class="chat__content__item">
          <div class="chat__container" id="scrollableDiv">
            <div class="time">3月21日 11:30</div>
            <div class="message left">
              <div class="author"><img src="http://news.china-ef.com/2022/images/slogo.png" alt="" /></div>
              <div class="msg">testtest</div>
            </div>
            <div class="message right">
              <div class="author"><img src="http://news.china-ef.com/2022/images/slogo.png" alt="" /></div>
              <div class="msg">testtestesttesttesttesttetesttestesttesttesttesttesttesttesttesttesttesttesttesttsttesttesttesttesttesttesttestt</div>
            </div>
          </div>
          <div class="chat__control">
            <div class="toolbar">
              <div class="toolbar__item">
                <span id="emoji"><img src="./images/emoji.svg" alt="" /></span>
                <div class="emoji__box"></div>
              </div>
              <div class="toolbar__item">
                <span><img src="./images/photo.svg" alt="" /></span>
                <input type="file" id="file" accept="image/*" />
              </div>
            </div>
            <textarea name="" id="textarea" cols="30" rows="10"></textarea>
            <button id="button" onclick="submit()">发送</button>
          </div>
        </div>
        <div class="chat__content__sidebar"></div>
      </div>

      <div class="chat__content liuyan" style="display: none">
        <form action="">
          <input type="text" placeholder="请输入您的姓名" />
          <input type="text" placeholder="请输入您的电话" />
          <textarea name="" id="" cols="30" rows="10" placeholder="请填写留言内容"></textarea>
          <button>提交留言</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
@import "../assets/main.css";
</style>
