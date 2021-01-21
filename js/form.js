class Form {
    constructor () {

    }

    display() {
        var title= createElement("h2")
        title.html("Welcome To The Car Racing Game!")
        title.position(130,100);
        var input= createInput("name");
        var button= createButton("Play");
        var greeting= createElement("h3");
        input.position(200,200);
        button.position(150,150)

        button.mousePressed(
            function () {
                input.hide();
                button.hide();
                var name= input.value();
                playerCount+=1
                player.updateName(name);
                player.updateCount(playerCount);
                greeting.html("Welconme"+name);
                greeting.position(300,300);
            }
            
        ) 

        
    }
}
