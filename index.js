let no = document.getElementById("no");
let AfterFrame = document.getElementById("afterframe");
let heart = document.getElementsByClassName("Heart");
let AfterMessage = document.getElementById("AfterMessage");

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