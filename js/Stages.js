//WIP




function stage1 ()
{
  document.getElementById("test2").innerHTML = "Klopf Klopf <br>"
  var btn2 = addButton("Wer ist da?","button","b2","test");
  document.getElementById("b2").addEventListener('click', stage2());

}

function stage2 ()
{

  document.getElementById("btn1").disabled = true; //Deaktiviert den Start Button
  var button = document.getElementById("btn1");  // Erfasst den Button durch die ID
  button.remove();                              //
}

function stage3 ()
{
  removeButton('btn1')
}
