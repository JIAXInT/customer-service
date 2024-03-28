// 滚动到底部
export default function scrollToBottom() {
  const scrollableDiv = document.getElementById("scrollableDiv");
  scrollableDiv.scrollTop = scrollableDiv.scrollHeight;
}
