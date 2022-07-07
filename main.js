var canvas=new fabric.Canvas("mycanvas");
blockwidth=30;
blockheight=30;
playerx=10;
playery=10;
var player_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_object=Img;
        block_object.scaleToWidth(blockwidth);
        block_object.scaleToHeight(blockheight);
        block_object.set({
            top:playery,
            left:playerx
        });
        canvas.add(block_object);
    });
}
 
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keypress=e.keyCode;
    console.log(keypress);

    if(e.shiftKey == true && keypress == "80")
    {
        console.log("p & shift pressed together");
        blockwidth=blockwidth+10;
        blockheight=blockheight+10;

        document.getElementById("currentwidth").innerHTML=blockwidth;
        document.getElementById("currentheigth").innerHTML=blockheight;
    }

    if(e.shiftKey == true && keypress == "77")
    {
        console.log("m & shift pressed together");
        blockwidth=blockwidth-10;
        blockheight=blockheight-10;

        document.getElementById("currentwidth").innerHTML=blockwidth;
        document.getElementById("currentheigth").innerHTML=blockheight;
    }

    if(keypress == "37")
    {
        left();
        console.log("left");
    }

    if(keypress == "38")
    {
        up();
        console.log("up");
    }

    if(keypress == "39")
    {
        right();
        console.log("right");
    }

    if(keypress == "40")
    {
        down();
        console.log("down");
    }

    if(keypress == "67")
    {
        new_image('cloud.jpg');
        console.log("c");
    }

    if(keypress == "68")
    {
        new_image('dark_green.png');
        console.log("d");
    }  

    if(keypress == "71")
    {
        new_image('ground.png');
        console.log("g");
    }

    if(keypress == "76")
    {
        new_image('light_green.png');
        console.log("l");
    }

    if(keypress == "82")
    {
        new_image('roof.jpg');
        console.log("r");
    }

    if(keypress == "84")
    {
        new_image('trunk.jpg');
        console.log("t");
    }

    if(keypress == "85")
    {
        new_image('unique.png');
        console.log("u");
    }

    if(keypress == "87")
    {
        new_image('wall.jpg');
        console.log("w");
    }

    if(keypress == "89")
    {
        new_image('yellow_wall.png');
        console.log("y");
    }
}

function up()
{
    if(playery>=0)
    {
        playery=playery-blockheight;
        console.log("block image height="+ blockheight);
        canvas.remove(player_object);
        player_update();
        }
}

function down()
{
    if(playery<=600)
    {
        playery=playery+blockheight;
        console.log("block image height="+ blockheight);
        canvas.remove(player_object);
        player_update();
        }
}

function left()
{
    if(playerx>=0)
    {
        playerx=playerx-blockwidth;
        console.log("block image width="+ blockwidth);
        canvas.remove(player_object);
        player_update();
        }
}

function right()
{
    if(playerx<=1000)
    {
        playerx=playerx+blockwidth;
        console.log("block image width="+ blockwidth);
        canvas.remove(player_object);
        player_update();
        }
}