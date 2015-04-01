var sceneData = [
    { question: "The setting is that you're in your apartment in Brooklyn. You hear someone scream for help outside. You run out and see two bloody people chasing a guy with glasses. The guy is running straight toward you. What do you do", choices: [
        { answer: "Let the guy come inside and try to quickly lock the door", next: 2 },
        { answer: "Close and bolt the door", next: 3}]
    }, //1
    { question: "second question. What do you do", choices: [
        { answer: "2 part 1", next: 11 },
        { answer: "2 part 2", next: 11},
        { answer: "2 part 3", next: 11},
        { answer: "2 part 4", next: 4}
        ]
    }, //2
    { question: "third question. What do you do", choices: [
        { answer: "3 part 1", next: 11 },
        { answer: "3 part 2", next: 5},
        { answer: "3 part 3", next: 11},
        { answer: "3 part 4", next: 11}
        ]
    }, //3
    { question: "fourth question. What do you do", choices: [
        { answer: "4 part 1", next: 11 },
        { answer: "4 part 2", next: 6},
        { answer: "4 part 3", next: 11},
        { answer: "4 part 4", next: 11}
        ]
    }, //4
    { question: "fifth question. What do you do", choices: [
        { answer: "5 part 1", next: 11 },
        { answer: "5 part 2", next: 7},
        { answer: "5 part 3", next: 11},
        { answer: "5 part 4", next: 7}
        ]
    }, //5
    { question: "sixth question. What do you do", choices: [
        { answer: "6 part 1", next: 11 },
        { answer: "6 part 2", next: 8},
        { answer: "6 part 3", next: 11},
        { answer: "6 part 4", next: 8}
        ]
    }, //6
    { question: "seventh question. What do you do", choices: [
        { answer: "7 part 1", next: 11 },
        { answer: "7 part 2", next: 9},
        { answer: "7 part 3", next: 11},
        { answer: "7 part 4", next: 11}
        ]
    }, //7
    { question: "eighth question. What do you do", choices: [
        { answer: "8 part 1", next: 11 },
        { answer: "8 part 2", next: 11},
        { answer: "8 part 3", next: 11},
        { answer: "8 part 4", next: 10}
        ]
    }, //8
    { question: "ninth question. What do you do", choices: [
        { answer: "9 part 1", next: 10 },
        { answer: "9 part 2", next: 11},
        { answer: "9 part 3", next: 11},
        { answer: "9 part 4", next: 11}
        ]
    }, //9
    { question: "you win", choices: [
        { answer: "try again", next: 1 }
        ]
    }, //10 WIN
    { question: "dead", choices: [
        { answer: "try again", next: 1 }
        ]
    } //11 DEAD
];
 
var ScenesModel = function(scenes) {
    var self = this;
    self.scenes = ko.observableArray(scenes);

    self.activequestion = ko.observable(scenes[0].question)
    self.activechoices = ko.observableArray(scenes[0].choices)

    self.nextScene = function(choice) {
    	self.activequestion(scenes[choice.next - 1].question);
    	self.activechoices(scenes[choice.next - 1].choices);
    } 
};
 
ko.applyBindings(new ScenesModel(sceneData));

/*
	score
	pictures
			
*/
