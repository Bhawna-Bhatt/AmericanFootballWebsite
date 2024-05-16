

teams = [
    { teamcode:"DAL", 
      name:"Dallas Cowboys", 
      locatedIn:"Arlington, TX"
    },
    { teamcode:"DEN", 
      name:"Denver Broncos", 
      locatedIn:"Denver, CO"
    },
    { teamcode:"HOU", 
      name:"Houston Texans", 
      locatedIn:"Houston, TX"
    },
    { teamcode:"KAN", 
      name:"Kansas City Chiefs", 
      locatedIn:"Kansas City, MO"
    }
  ];

  window.onload = function (){
    initFootballdropdown();
    const selectionBtn =document.getElementById("selectionBtn");
    selectionBtn.onclick = choiceSelection;

    
  }

  function initFootballdropdown () {
    const teamlist = document.getElementById("teamlist");

    for (let i=0;i<teams.length;i++) {
        let theOption = new Option(teams[i].name,teams[i].teamcode);
        teamlist.appendChild(theOption)
    }

  }

  function choiceSelection(){
    const teamlist1 = document.getElementById("teamlist");
    let selectionChoice = teamlist1.value;
    //alert(selectionChoice);
    let teamcode = teams.find(t => t.teamcode === selectionChoice);
    alert(`You selected the ${teamcode.name} ${selectionChoice} who play in ${teamcode.locatedIn}`);
    
  }

/* function Code(){
    if (teams.name == selectionChoice)
         {return true;}
      else {return false;}
 } */




