console.log("hello from js-file");
function minFunktion()
{
    console.log("funktionen kördes!");
}
minFunktion();
function buttonHandler()
{
    console.log("Du klickade där u sick fuck");
    alert("sike");
}
function secondButton()
{
    const namn = prompt("Vad heter du?");
    alert("Hello " + namn);
}
function thirdButton()
{
   //const namn1 = document.querySelector("#namn1").value;
   let namn1 = document.getElementById("namn1").value;
    console.log(namn1);
    if (namn1 == "Wikke" || namn1 == "Wiktor");
    {
        namn1 = namn1 + " Wasenius :D:D:D";
    }
    else if (namn1 == millimuna)
    {
        namn1 = namn1 + " hassu!"
    }
    else
    {
        namn1 = namn1 + " jännä namn hehe XD";
    }
    document.querySelector('#hello-output').innerText = `Hello ${namn1}`;
}
function pT()
{
    if (minuter >= 60)
    {
        console.log("Bra jobbat!");
    }
    else 
    {
        console.log("Träna mera!");
    }
}