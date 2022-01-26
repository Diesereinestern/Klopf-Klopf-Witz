//WIP



    function stage1 ()
     {
       document.getElementById('Placeholder1').innerHTML = "Klopf Klopf <br>"
       var btn2 = addButton("Wer ist da?","button",'btn2',"Placeholder2");
       document.getElementById('btn2').addEventListener('click', stage2());
     }

    function stage2 ()
     {
      alert("Stage 2 Alert")
      removeButton('btn1')

     }

    function stage3 ()
     {
       alert("Stage 3 Alert")
     }
