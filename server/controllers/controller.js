import Question from "../models/questionSchema.js";
import Result from "../models/ResultSchema.js";
/** get all questions */
export async function getQuestions(req, res) {
  try {
    const q = await Question.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export async function insertQuestions(req, res) {
  const { id, time, date, title, desc, QuizQues } = req.body;
  try {
    Question.create(
      {
        id,
        time,
        date,
        title,
        desc,
        QuizQues,
      },
      function (err, data) {
        res.json({ msg: "data inserted successfully" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}


/** get all result */
export async function getResult(req, res) {
  try {
    const q = await Result.find();
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** post all result */
export async function storeResult(req, res) {
  const { quesid,avvgtime, name, email, score } = req.body;

  try {
    Result.create({ quesid,avvgtime, name, email, score }, function (err, data) {
      res.json({ msg: "result stored" });
    });
  } catch (error) {
    res.json({ error });
  }
}
