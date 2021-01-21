class Player {
    constructor () {

 }

 getCount() {
     var playerref= database.ref("playerCount");
     playerref.on("value",function (data){
         playerCount= data.val();
     })
 }

 updateCount(count) {
     database.ref("/").update({
         playerCount : count
     })
 }

 updateName(name) {
     var playerIndex= "player"+playerCount;
     database.ref(playerIndex).set({
         Name: name
     })

 }
}