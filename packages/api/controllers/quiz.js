const Quiz = require("../models/quiz");
const User = require("../models/user");


// middleware
exports.getQuizById = async (req, res, next, quizId) => {
  const quiz = await Quiz.findById(quizId);
  try {
    req.quiz = quiz;
    next();
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// read
exports.getAllQuiz = async (req, res) => {
  let quizzes = await Quiz.find();
  try {
    let finalQuiz = [];
    quizzes.forEach((quiz) => {
      const { _id, name, thumbnail, backgroundImage, description, quizzes } =
        quiz;
      finalQuiz = [
        ...finalQuiz,
        { _id, name, thumbnail, backgroundImage, description, quizzes },
      ];
    });
    res.json(finalQuiz);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getQuiz = (req, res) => {
  try {
    const quiz = req.quiz;
    const { _id, name, thumbnail, backgroundImage, description, quizzes } =
      quiz;
    res.json({ _id, name, thumbnail, backgroundImage, description, quizzes });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// create
exports.createQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.insertMany([
      {
        name: "Harry Potter",
        thumbnail:
          "https://api.time.com/wp-content/uploads/2014/07/301386_full1.jpg?quality=85&w=766&h=512&crop=1",
        backgroundImage:
          "https://images4.alphacoders.com/843/thumb-1920-84314.jpg",
        description:
          "If you consider yourself a Potterhead, check how much it's in your head!",
        quizzes: [
          {
            question: "What's the name of Dudley Dursely's dad?",
            options: ["Victor", "Evan", "Vernon", "Vesuvius"],
            correctAnswer: "Vernon",
          },
          {
            question: "In which year was Harry born?",
            options: ["1991", "1980", "2002", "1982"],
            correctAnswer: "1980",
          },
          {
            question: "What is the name of Hermione Granger's cat?",
            options: ["Bart", "Ted", "Croockshanks", "Peppa"],
            correctAnswer: "Croockshanks",
          },
          {
            question: "What is inside Harry’s wand?",
            options: [
              "A phoenix feather",
              "A fox tail",
              "A widow's hair",
              "A lions skin",
            ],
            correctAnswer: "A phoenix feather",
          },
          {
            question: "How many brothers and sisters does Ron Weasley have?",
            options: ["2", "3", "10", "6"],
            correctAnswer: "6",
          },
          {
            question: "What make is the flying car in Harry Potter?",
            options: ["Ford Anglia", "Markus Mury", "Ferrari", "Lamborghini"],
            correctAnswer: "Ford Anglia",
          },
          {
            question: "What does Ron see in the Mirror of Erised? ",
            options: [
              "His grinning face",
              "Into his future",
              "Himself holding the Quidditch Cup",
              "He being with Hermoine",
            ],
            correctAnswer: "Himself holding the Quidditch Cup",
          },
          {
            question: "How many siblings Sirius Black had?",
            options: ["2", "4", "6", "5"],
            correctAnswer: "4",
          },
          {
            question: "Who was not one of the creator of The Marauder's Map?",
            options: [
              "Remus Lupin",
              "Peter Pettigrew",
              "Padfoot",
              "Amycus Carrow",
            ],
            correctAnswer: "Amycus Carrow",
          },
          {
            question: "Who was the founder of house Slytherin?",
            options: ["Godric", "Rowena", "Sypherus", "Salazar"],
            correctAnswer: "Salazar",
          },
        ],
      },
      {
        name: "F.R.I.E.N.D.S",
        description:
          "Don't call yourself a F.R.I.E.N.D.S fan if you don't know these :p",
        thumbnail:
          "https://media1.fdncms.com/stranger/imager/u/large/56508297/1618252656-asi_eran_y_asi_son_matt_leblanc_y_matthew_perry_j.jpg",
        backgroundImage:
          "https://wallpapercave.com/wp/VLqMEa1.jpg",
        quizzes: [
          {
            question: "What magazine was sent to 'Miss Chandler Bong'?",
            options: [
              "Better Homes and Gardens",
              "Reader's Digest",
              "TV Guide",
              "US Weekly",
            ],
            correctAnswer: "TV Guide",
          },
          {
            question: "What does Ross gift Rachel at the end of the season 1?",
            options: [
              "A porcelain duck",
              "A vintage pin",
              "A heartfelt letter",
              "A stuffed gorilla",
            ],
            correctAnswer: "A vintage pin",
          },
          {
            question:
              "Which one of the following is not a category in Ross' quiz about his friends?",
            options: [
              "Strengths and Weaknesses",
              "Ancient History",
              "It's All Relative",
              "Literature",
            ],
            correctAnswer: "Strengths and Weaknesses",
          },
          {
            question: "What fake name does Phoebe use?",
            options: [
              "Regina Phalange",
              "Kristine Blackhand",
              "Lyndia Keller",
              "Rebecca Longstocking",
            ],
            correctAnswer: "Regina Phalange",
          },
          {
            question:
              "What country does Chandler go to to get away from Janice?",
            options: ["Uruguay", "Somalia", "Yemen", "Algeria"],
            correctAnswer: "Yemen",
          },
          {
            question: "Rachel and Monica hire a stripper for Pheobe's bachelorette, what was his name?",
            options: [
              "Mister All Up in Your Business",
              "Captain Cowboy",
              "Roaring Roy",
              "Officer Goodbody"
            ],
            correctAnswer: "Officer Goodbody",
          },
          {
            question: "What game of 'Strip' does the gang play on the beach?",
            options: [
              "Strip Sand In My Pants",
              "Strip Fun In The Sun",
              "Strip Happy Days",
              "Strip Sunny Memories",
            ],
            correctAnswer: "Strip Happy Days",
          },
          {
            question: "Who says the final line in the last episode?",
            options: [
              "Joey",
              "Chandler",
              "Rachel",
              "Phoebe"
            ],
            correctAnswer: "Chandler",
          },
          {
            question: "Which one of the following Rachel didn't kiss him/her on the show?",
            options: [
              "Monica",
              "She kissed all",
              "Chandler",
              "Phoebe"
            ],
            correctAnswer: "She kissed all",
          },
          {
            question: "Who was Joey’s imaginary childhood friend?",
            options: [
              "James",
              "Maurice",
              "John",
              "Patrick"
            ],
            correctAnswer: "Maurice",
          },
        ],
      },
      {
        name: "Naruto",
        description:
          "Let's check if you are still spellbound by this legendary anime.",
        thumbnail:
        "https://www.otakukan.com/wp-content/uploads/2019/07/naruto-1.jpg",
        backgroundImage:
        "https://i.pinimg.com/originals/95/33/62/953362b1d0626ef767ef3eebc6f32799.png",
        quizzes: [
          {
            question: "What is the name of Kakashi’s smallest Ninken(Ninja Hounds)?",
            options: [
              "Urushi",
              "Shiba",
              "Pakkun",
              "Bisuke",
            ],
            correctAnswer: "Pakkun",
          },
          {
            question: "How old was Naruto in the original Naruto?",
            options: [
              "10",
              "12",
              "13",
              "15",
            ],
            correctAnswer: "12",
          },
          {
            question:
              "Who is terrified of Toads?",
            options: [
              "Shino",
              "Sakura",
              "Naruto",
              "Kiba Inuzuka",
            ],
            correctAnswer: "Sakura",
          },
          {
            question: "Whose hobby is pressing flowers?",
            options: [
              "Kushina",
              "Temari",
              "Hinata",
              "Kurenai",
            ],
            correctAnswer: "Hinata",
          },
          {
            question:
              "Who else has the same ability as Kakashi to create lightning with the hand?",
            options: ["Kakuzu", "Indra", "Naruto", "Sakura"],
            correctAnswer: "Indra",
          },
          {
            question: "Who else has the same catchphrase as Naruto ('you know')",
            options: [
              "Obito",
              "Minato",
              "Kushina",
              "Choji"
            ],
            correctAnswer: "Kushina",
          },
          {
            question: "What is the name of 6th tail beast?",
            options: [
              "Matatabi",
              "Saiken",
              "Gyuki",
              "Isobu",
            ],
            correctAnswer: "Saiken",
          },
          {
            question: "Which word means female ninja?",
            options: [
              "Shinobi",
              "Kunoichi",
              "Skibo",
              "Ninjutsu"
            ],
            correctAnswer: "Kunoichi",
          },
          {
            question: "Who owned sword of Thunder God",
            options: [
              "Tobirama",
              "Hashirama",
              "Indra",
              "Kakuzu"
            ],
            correctAnswer: "Tobirama",
          },
          {
            question: "Who were the Team 7 looking for in their first mission?",
            options: [
              "Tora",
              "Tazuna",
              "Shibuki",
              "Genmai"
            ],
            correctAnswer: "Tora",
          },
        ],
      },
      {
        name: "Marvel Cinematics",
        description:
          "Check how deep you are into Marvel cinematics",
        thumbnail:
        "https://www.aiesec.in/wp-content/uploads/2018/08/Captain-america-1.jpg",
        backgroundImage:
        "https://i.pinimg.com/originals/82/ec/ca/82eccaca6a0b704ee503754ba312532f.jpg",
        quizzes: [
          {
            question: "BLACK PANTHER: What do Killmonger and Klaue steal from the Museum of Great Britain?",
            options: [
              "Just vibranium",
              "Vibranium and a mask",
              "A map of Wakanda",
              "A map of Wakanda and vibranium",
            ],
            correctAnswer: "Vibranium and a mask",
          },
          {
            question: "IRON MAN 2: What fake name does Natasha use when she first meets Tony?",
            options: [
              "Natalie Rushman",
              "Natalia Romanoff",
              "Nicole Rohan",
              "Naya Rabe",
            ],
            correctAnswer: "Natalie Rushman",
          },
          {
            question:
              "CAPTAIN AMERICA: THE FIRST AVENGER: Where does Peggy tell Steve she wants to meet him for a dance, before he plunges into the ice?",
            options: [
              "The Cotton Club",
              "The Stork Club",
              "El Morocco",
              "The Copacabana",
            ],
            correctAnswer: "The Stork Club",
          },
          {
            question: "THE AVENGERS: Natasha remarks to Clint that the Battle of New York is a lot like what?",
            options: [
              "Their time in Budapest",
              "Their time in Prague",
              "Their time in Istanbul",
              "Their time in Sokovia",
            ],
            correctAnswer: "Their time in Budapest",
          },
          {
            question:
            "IRON MAN 3: What is the name of the little boy Tony befriends while stranded?",
            options: ["Harry", "Henry", "Harley", "Holder"],
            correctAnswer: "Harley",
          },
          {
            question: "THOR: THE DARK WORLD: Where do Sif and Volstagg hide the Reality Stone at the end of the movie?",
            options: [
              "On Vormir",
              "In a vault on Asgard",
              "Inside Sif's sword",
              "They give it to a collector"
            ],
            correctAnswer: "They give it to a collector",
          },
          {
            question: "GUARDIANS OF THE GALAXY: What were the three items Rocket claims he needs in order to escape the prison?",
            options: [
              "A security card, a fork, and an ankle monitor",
              "A security band, a battery, and a prosthetic leg",
              "A pair of binoculars, a detonator, and a prosthetic leg",
              "A knife, cable wires, and Peter's mixtape",
            ],
            correctAnswer: "A security band, a battery, and a prosthetic leg",
          },
          {
            question: "ANT-MAN: What animal does Darren Cross unsuccessfully shrink?",
            options: [
              "Mouse",
              "Sheep",
              "Duck",
              "Hamster"
            ],
            correctAnswer: "Sheep",
          },
          {
            question: "CAPTAIN AMERICA: CIVIL WAR: Who ISN'T on Iron Man's team?",
            options: [
              "Vision",
              "Black Panther",
              "Hawkeye",
              "Black Widow"
            ],
            correctAnswer: "Hawkeye",
          },
          {
            question: "DOCTOR STRANGE: What type of doctor is Stephen Strange?",
            options: [
              "Neurosurgeon",
              "Cardiothoracic Surgeon",
              "Trauma Surgeon",
              "Plastic Surgeon"
            ],
            correctAnswer: "Neurosurgeon",
          },
        ],
      },
    ]);
    res.json(quiz);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};
