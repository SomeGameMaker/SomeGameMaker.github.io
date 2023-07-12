
const button1 = document.getElementById('one');
const button2 = document.getElementById('two');
const button3 = document.getElementById('three');
const Return = document.getElementById('back');
const Text = document.getElementById('text');

let gold = 0;


function buttononepressed() {
    if (button1.id === 'one') {
        button1.innerText = 'Talk to dojo master';
        button2.innerText = 'ask around';
        button3.innerText = 'Fight Dummy';
        button1.setAttribute('id', 'Talk to dojo master'); 
        button2.setAttribute('id', 'ask around');
        button3.setAttribute('id', 'Fight Dummy');
        Text.innerText = "You hear the powerfull warriors              Training around You"
    } else if (button1.id === 'Talk to dojo master') {
        button1.innerText = 'Say hello';
        button2.style.display = 'none';
        button3.style.display = 'none';
        button1.setAttribute('id', 'say hello');
    } else if (button1.id === 'say hello') {
        Text.innerText = "You are far to weak to speak to me"
        button1.innerText = '...';
        button2.style.display = 'none';
        button3.style.display = 'none';
    }
        else if (button1.id === 'kai') {
        Text.innerText = "Asking around yields no information other than he is armed with mountains of knowledge and strength said to rival that of the dojo master himself(none of the claims are backed up by any evidence)."
        const br = document.createElement('br');
        const rankText = document.createTextNode('current rank: Immesureable with current information.');
        Text.appendChild(br)
        Text.appendChild(rankText);
          
        button1.innerText = 'Aproach Kai';
        button2.style.display = 'none';
        button3.style.display = 'none';
        button1.setAttribute('id', 'AproachKai');}
          
       else if (button1.id === 'AproachKai') {
        Text.innerText = "Kai responds with a greeting hello"
        button1.innerText = 'tell him that you are new to the          dojo';
        button2.innerText = 'Ask for a fight';
        button3.innerText = 'Ask about his true strength';
        button2.style.display = 'block';
        button3.style.display = 'block';
        button1.setAttribute('id', 'tell him that you are new to the dojo'); 
        button2.setAttribute('id', 'Ask for a figh (kai)');
        button3.setAttribute('id', 'Ask about his true strength');
    }
    else if (button1.id === 'tell him that you are new to the dojo') {
        Text.innerText = "Kai stands there waiting for your response to his question"
        button1.innerText = 'Want me to explain the Ranking System for ya?';
      button2.style.display = 'none';
      button3.style.display = 'none';
      button1.setAttribute('id', 'Ranking System');
    }
  else if (button1.id === 'Ranking System') {
        Text.innerText = "The ranking system in the world is         based on the level of threat to the Kingdom and an             individual's strength. For example, an average                 civilian's threat level is referred to as Base threat,         and their power level is classified as Quatar star. When       referring to humans, it is common to only mention the          star level, so the threat rating of an average human           would be Quatar star.To determine an individual's power        level, one can gather information by asking around the         dojo. However, for creatures with a more powerful              threat level, such as a dragon, they are classified as          a 4-star calamity, with the number of stars                   representing their power level and calamity representing       the threat to the Kingdom. Generally, with wild animals,       a higher number of stars correlates with a greater level        of threat.The dojo curriculum currently teaches three          levels of threat:1-star: These individuals are                 wellbeyond the average human and can easily take down          multiple people.2-star: A creature or person with a 2-         star rating can break through solid concrete and               decimate even a group of knights.3-star: These monsters        can easily demolish buildings and can even take down           high-level knights, sometimes even small groups of them."
    
button1.innerText = '...';
        button1.setAttribute('id', '...');
            }

}

function buttontwopressed () {
if (button2.id === 'two') {
        Text.innerText = "Ahh nice and warm atlast"
        button1.innerText = 'Sleep';
        button2.innerText = 'Light fire';
        button3.innerText = 'Craft';
        button1.setAttribute('id', 'Sleep'); 
        button2.setAttribute('id', 'Light fire');
        button3.setAttribute('id', 'Craft');
      } else if (button2.id === 'ask around') {
        Text.innerText = "you feel the presure of ur peers on you"
        button1.innerText = 'kai';
        button2.innerText = 'Akira';
        button3.innerText= 'Hiroshi';
        button1.setAttribute('id', 'kai')
        button2.setAttribute('id', 'Akira')
        button3.setAttribute('id', 'Hiroshi') }
        else if (button2.id === 'Akira') {
        const Text = document.getElementById('text'); // get the text element
Text.innerText = "After asking around you find some information about her. She is a disciplined and focused martial artist who has been training at the dojo for many years. She is known for her precise techniques and her ability to stay calm under pressure.";
        const br = document.createElement('br');
        const rankText = document.createTextNode('current rank:');
        Text.appendChild(br)
        Text.appendChild(rankText);
        
        for (let i = 0; i < 2; i++) {
        const img = document.createElement('img');
        img.src = 'Star/Star.png'; 
        img.alt = 'star'; 

        img.style.width = '15px';
        img.style.height = '15px'; 
        Text.appendChild(img);
        }
          
        button1.innerText = '...';
        button2.style.display = 'none';
        button3.style.display = 'none';
      }
     
}

function buttonthreepressed () {
if (button3.id === 'three') {
        Text.innerText = "how did i find this?"
        button1.style.display = 'none';
        button2.style.display = 'none';
        button3.style.display = 'none';
      } else if (button3.id === 'Hiroshi') {
        Text.innerText = "He is a retired police officer who joined the dojo to continue his training and stay fit. He is a respected member of the dojo community and often shares his experiences with the younger students."
        const br = document.createElement('br');
        const rankText = document.createTextNode('current rank:');
        Text.appendChild(br)
        Text.appendChild(rankText);
        
        for (let i = 0; i < 1; i++) {
        const img = document.createElement('img');
        img.src = 'Star/Star.png'; 
        img.alt = 'star'; 

        img.style.width = '15px';
        img.style.height = '15px'; 
        Text.appendChild(img);
        }
  
       for (let i = 0; i < 1; i++) {
        const img = document.createElement('img');
        img.src = 'Star/HalfStar.png'; 
        img.alt = 'star'; 

        img.style.width = '15px';
        img.style.height = '15px'; 
        Text.appendChild(img);
        }
  
        button1.innerText = '...';
        button2.style.display = 'none';
        button3.style.display = 'none';
    }
}


function returnpressed () {
    button1.innerText = 'Train';
    button2.innerText = 'Home';
    button3.innerText = 'Pizza';
    text.innerText = "You Feel The Gentile Breeze Of The Outdoors"

    button1.style.display = 'block';
    button2.style.display = 'block';
    button3.style.display = 'block';
  button1.setAttribute('id', 'one');
  button2.setAttribute('id', 'two');
}

button1.addEventListener('click', buttononepressed);
button2.addEventListener('click', buttontwopressed);
button3.addEventListener('click', buttonthreepressed);
Return.addEventListener('click', returnpressed);

const pizzaButton = document.getElementById('three');

pizzaButton.addEventListener('click', function() {
const item1Count = document.getElementById('item1-count');
item1Count.innerText = parseInt(item1Count.innerText) + 1;


});

const pizzaCount = document.getElementById('item1-count');
const watermelonCount = document.getElementById('item2-count');
const dirtCount = document.getElementById('item3-count');
const diamondCount = document.getElementById('item4-count');
const item5Count = document.getElementById('item5-count');


if (localStorage.getItem('pizzaCount')) {
pizzaCount.innerText = localStorage.getItem('pizzaCount');
}

if (localStorage.getItem('watermelonCount')) {
watermelonCount.innerText = localStorage.getItem('watermelonCount');
}

if (localStorage.getItem('dirtCount')) {
dirtCount.innerText = localStorage.getItem('dirtCount');
}

if (localStorage.getItem('diamondCount')) {
diamondCount.innerText = localStorage.getItem('diamondCount');
}

if (localStorage.getItem('item5Count')) {
item5Count.innerText = localStorage.getItem('item5Count');
}

window.onbeforeunload = function() {
  localStorage.setItem('pizzaCount', pizzaCount.innerText);
  localStorage.setItem('watermelonCount', watermelonCount.innerText);
  localStorage.setItem('dirtCount', dirtCount.innerText);
  localStorage.setItem('diamondCount', diamondCount.innerText);
  localStorage.setItem('trashSwordCount', trashSwordCount.innerText);
}


const allBtn = document.querySelector(".tab.active");
const meleeBtn = document.querySelector(".melee");
const rangedBtn = document.querySelector(".ranged");
const magicBtn = document.querySelector(".magic");


var nodes = [
  
  {id: 1, label: 'Physical Power', level: 1, group: 'Physical'},
  {id: 2, label: 'Strength', level: 2, group: 'Physical'},
  {id: 3, label: 'Punching', level: 2, group: 'Physical'},
  {id: 4, label: 'Martial Arts', level: 2, group: 'Physical'},
  {id: 17, label: 'Overwhelming Force', level: 3, group: 'Physical'},
  {id: 18, label: 'Air Punch', level: 3, group: 'Physical'},
  
  {id: 5, label: 'Ranged Skills', level: 1, group: 'Ranged'},
  {id: 6, label: 'Strength Projection', level: 2, group: 'Ranged'},
  {id: 7, label: 'Bow', level: 3, group: 'Ranged'},
  {id: 8, label: 'Throwing Knives', level: 3, group: 'Ranged'},
  {id: 9, label: 'Air Punch', level: 3, group: 'Ranged'},
  {id: 10, label: 'Arrows', level: 4, group: 'Ranged'},

  
  {id: 11, label: 'Enhance Mind', level: 1, group: 'Qi'},
  {id: 12, label: 'QI Manipulation', level: 2, group: 'Qi'},
  {id: 13, label: 'QI Condensation', level: 3, group: 'Qi'},
  {id: 14, label: 'Ki Infusion', level: 3, group: 'Qi'},
  {id: 15, label: 'Mind Infusion', level: 3, group: 'Qi'},
  {id: 16, label: 'Rank Up', level: 4, group: 'Qi'},
];


var edges = [
  {from: 1, to: 2},
  {from: 1, to: 3},
  {from: 1, to: 4},
  {from: 2, to: 17},
  {from: 3, to: 17},
  {from: 3, to: 18},
  {from: 4, to: 18},
  {from: 17, to: 18},
  {from: 5, to: 6},
  {from: 6, to: 7},
  {from: 6, to: 8},
  {from: 6, to: 9},
  {from: 7, to: 10},
  {from: 11, to: 12},
  {from: 12, to: 13},
  {from: 12, to: 14},
  {from: 12, to: 15},
  {from: 13, to: 16},
  {from: 14, to: 16},
  {from: 15, to: 16},
];


var container = document.getElementById('skilltree');
var data = { nodes: nodes, edges: edges };
var options = {
  
  physics: {
    enabled: false
  },
  
  nodes: {
    shape: 'dot',
    size: 20,
    font: {
      color: 'white',
      size: 15
    },
    borderWidth: 2,
    shadow: true
  },
  edges: {
    width: 2
  },
  groups: {
    Physical: {
      color: {
        background: 'red'
      }
    },
    Ranged: {
      color: {
        background: 'green'
      }
    },
    Qi: {
      color: {
        background: 'blue'
      }
    }
  },
  layout: {
    hierarchical: {
      direction: 'DU',
      sortMethod: 'directed'
    }
  },
  interaction: {
    hover: true,
    keyboard: true,
    dragNodes: false
  },
  navigation: {
    enabled: true,
    keyboard: true
  }
};

var network = new vis.Network(container, data, options);


