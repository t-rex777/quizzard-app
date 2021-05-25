const Quiz = require("../models/quiz");

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
  quizzes.forEach(quiz=>{
    const {_id,name,description,quizzes} = quiz;
    finalQuiz = [...finalQuiz , {_id,name,description,quizzes}]
  })
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
    const {_id,name,description,quizzes} = quiz;
    res.json({_id,name,description,quizzes});
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
            answer: [
              "His grinning face",
              "Into his future",
              "Himself holding the Quidditch Cup",
              "He being with Hermoine",
            ],
            correctAnswer: "Himself holding the Quidditch Cup",
          },
          {
            question: "How many siblings Sirius Black had?",
            answer: ["2", "4", "6", "5"],
            correctAnswer: "4",
          },
          {
            question: "Who was not one of the creator of The Marauder's Map",
            answer: [
              "Remus Lupin",
              "Peter Pettigrew",
              "Padfoot",
              "Amycus Carrow",
            ],
            correctAnswer: "Amycus Carrow",
          },
          {
            question: "Who was the founder of house Slytherin",
            answer: ["Godric", "Rowena", "Sypherus", "Salazar"],
            correctAnswer: "Salazar",
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
