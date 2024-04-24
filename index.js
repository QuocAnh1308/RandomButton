let no = document.getElementById("no");
let yes = document.getElementById("yes");
let AfterFrame = document.getElementById("afterframe");
let heart = document.getElementsByClassName("Heart");
let AfterMessage = document.getElementById("AfterMessage");
let ScreenWidth = screen.width;
let ScreenHeight = screen.height;

if(ScreenWidth < ScreenHeight)
{
    no.style.width = "10vw";
    yes.style.width = "10vw";
    no.style.height = "3vh";
    yes.style.height = "3vh";
    for(const i of heart)
    {
        getComputedStyle(i).animationDuration = parseInt(getComputedStyle(i).animationDuration) - 2 + "s";
    }    
}

function ChangePosition()
{
    no.style.left = Math.ceil(Math.random()*90) + "%";
    no.style.top = Math.ceil(Math.random()*90) + "%";
}

function Active()
{
    AfterFrame.style.zIndex = "2";
    AfterMessage.style.zIndex = "4";
    for(const i of heart)
    {
        i.style.animationName = "Heart1";
    }
}

