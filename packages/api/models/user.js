const mongoose = require("mongoose");
const { createHmac } = require("crypto");
const { v4: uuidv4 } = require("uuid");

const userSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    encrypted_password: String,
    salt: String,
    quizCompleted: [
      {  _id: false,
        score: Number,
        quiz: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Quiz",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

userSchema
  .virtual("password")
  .set(function (password) {
    this._password = this.password;
    this.salt = uuidv4();
    this.encrypted_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.methods = {
  securePassword: function (plainPassword) {
    if (!plainPassword) {
      return "";
    }
    try {
      const secret = this.salt;
      return createHmac("sha256", secret).update(plainPassword).digest("hex");
    } catch (error) {
      return "";
    }
  },
  isAuthenticated: function (plainPassword) {
    this.encrypted_password === this.securePassword(plainPassword);
  },
};

module.exports = mongoose.model("User", userSchema);
