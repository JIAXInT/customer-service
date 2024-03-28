/**
 * 获取指定时间或当前时间，格式为：3月21日 11:30
 * @param {Date} [date] - 指定的时间，默认为当前时间
 * @returns {string} - 格式化后的时间字符串
 */
export default function formatDate(date = new Date().getTime()) {
  date = new Date(date);
  const month = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes().toString().padStart(2, "0");

  return `${month[monthIndex]}${day}日 ${hour}:${minute}`;
}
