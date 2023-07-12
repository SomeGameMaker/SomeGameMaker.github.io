 // Skill tree dataset
var nodes = [
  // Physical Power branch
  {id: 1, label: 'Physical Power', level: 1, group: 'Physical'},
  {id: 2, label: 'Strength', level: 2, group: 'Physical'},
  {id: 3, label: 'Punching', level: 2, group: 'Physical'},
  {id: 4, label: 'Martial Arts', level: 2, group: 'Physical'},

  // Ranged Skills branch
  {id: 5, label: 'Ranged Skills', level: 1, group: 'Ranged'},
  {id: 6, label: 'Strength Projection', level: 2, group: 'Ranged'},
  {id: 7, label: 'Bow', level: 3, group: 'Ranged'},
  {id: 8, label: 'Throwing Knives', level: 3, group: 'Ranged'},
  {id: 9, label: 'Air Punch', level: 3, group: 'Ranged'},
  {id: 10, label: 'Arrows', level: 4, group: 'Ranged'},

  // QI branch
  {id: 11, label: 'QI', level: 1, group: 'Qi'},
  {id: 12, label: 'QI Manipulation', level: 2, group: 'Qi'},
  {id: 13, label: 'QI Condensation', level: 3, group: 'Qi'},
  {id: 14, label: 'Ki Infusion', level: 3, group: 'Qi'},
  {id: 15, label: 'Mind Infusion', level: 3, group: 'Qi'},
  {id: 16, label: 'Rank Up', level: 4, group: 'Qi'},
];

// Skill tree edges
var edges = [
  {from: 1, to: 2},
  {from: 1, to: 3},
  {from: 1, to: 4},
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

// Create a network visualization of the skill tree
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
      size: 20
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
      direction: 'UD',
      sortMethod: 'directed'
    }
  },
  interaction: {
    hover: true,
    keyboard: true
  },
  navigation: {
    enabled: true,
    keyboard: true
  }
};

var network = new vis.Network(container, data, options);

