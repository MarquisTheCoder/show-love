
//
// window.onload = () => {
//    
//      /*getting the phone number from the input id*/
//      const phoneNumber = () => document.getElementById('phone-number').value;
//     
//      /*getting the selected string from the webpage*/
//      const selectedText = () => {
//           let selectObject = document.getElementsByName('words-of-encouragement')[0]
//           return selectObject.options[selectObject.selectedIndex].text;
//      }
//     
//      document.getElementById('send-btn').onclick = function(){
//           alert(phoneNumber());
//          
//      } 
//     
// }

$.post("/api/foo", function(data) {
     console.log( "Foo function result:", data );
});