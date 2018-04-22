function query() {
  var request = new XMLHttpRequest();

request.open("GET","https://programo.marvnet.de/chatbot/conversation_start.php?say=" +  document.getElementById("inp").value);
request.addEventListener('load', function(event) {
   if (request.status >= 200 && request.status < 300) {
      let str = JSON.parse(request.responseText);
      console.log(str.botsay);
   } else {
      console.warn(request.statusText, request.responseText);
   }
});
request.send();
}
