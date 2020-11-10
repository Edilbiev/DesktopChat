export function scrollChatToBottom() {
  const chatWindow = document.getElementById("chat-window");
  if(chatWindow) {
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }
}
