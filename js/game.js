class Game {
    constructor () {

    }
    getState() {
        var gameref = database.ref("gameState")
        gameref.on("value",function(data){
            gameState= data.val();
        })
    }

    update(state)  {
        database.ref("/").update({
            gameState: state
        })
    }

    start() {
        if(gameState === 0) {
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }
}