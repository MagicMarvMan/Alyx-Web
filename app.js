function query() {
  var request = new XMLHttpRequest();

request.open("GET","https://programo.marvnet.de/chatbot/conversation_start.php?say=" +  document.getElementById("inp").value);
document.getElementById("inp").innerHTML = document.getElementById("inp").innerHTML + "<p><span style='color:blue;font-weight:bold;'>You:</span>&nbsp;" + document.getElementById("inp").value + "</p>";
document.getElementById("inp").value = "";
request.addEventListener('load', function(event) {
   if (request.status >= 200 && request.status < 300) {
      let str = JSON.parse(request.responseText);
      console.log(str.botsay);
      document.getElementById("inp").innerHTML = document.getElementById("inp").innerHTML + "<p><span style='color:red;font-weight:bold;'>Alyx:</span>&nbsp;" + str.botsay + "</p>";
   } else {
      console.warn(request.statusText, request.responseText);
   }
});
request.send();
}
