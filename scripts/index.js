"use strict"

let teams = [
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
  }

  function initFootballdropdown () {
    const teamlist = document.getElementById("teamlist");

    for (let i=0;i<teams.length;i++) {
        let theOption = new Option(teams[i].name,teams[i].teamcode);
        teamlist.appendChild(theOption)
    }

  }
  