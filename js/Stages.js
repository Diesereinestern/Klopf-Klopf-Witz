//WIP



function stage1 ()
{
  document.getElementById("Placeholder1").innerHTML = "Klopf Klopf <br>"
  var btn2 = addButton("Wer ist da?","button","btn2","Placeholder2");
  document.getElementById("btn2").addEventListener('click', stage2());

}

function stage2 ()
{
  document.getElementById("btn1").disabled = true;
  var button = document.getElementById("btn1");
  button.remove();                              
}

function stage3 ()
{
  removeButton('btn1')
}
