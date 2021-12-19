/**
 * 
 */

module.exports.Participant = class Participant {

  static participants = [];

  constructor(name) {
    this.name = name;
  }

  name = "Unnamed Participant";
  inventory = [
    {
      "equipped": [
        { "armor": "none" },
        { "left_hand": "none" },
        { "right_hand": "none" },
        { "both_hands": "none" },
        { "gear": [

        ]}
      ],

      "items": [

      ]
    }
  ];
  others = [];
  location;

  stats = [
    { "health": 100}
  ]

  changeFriendliness(participant, amount) {

    var changed = false;
    for (let i = 0; i < this.friendliness; i++) {
      if (this.friendliness[i].arse_hole) {
        this.friendliness.arse_hole += amount;
        changed = true;
      }
    }

    if (changed == false) {
      var participantName = participant.name;
      participantName = participantName.replace(" ", "_");
      this.friendliness[this.friendliness.length + 1] = { participantName: 3 }
    }
  }

  doAction() {
    
  }

  actions = {

    ScanArea() {

    }

  }
}