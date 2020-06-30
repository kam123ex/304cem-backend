const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const mongo = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const Diary = require("../../mondel/Diary");
// Router Get api/diaries

router.get("/", (req, res) => {
  Diary.find()
    .then((result) => {
      return res.status(201).json({
        diaries: result,
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: err,
      });
    });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Diary.findById(id)
    .then((result) => {
      return res.status(201).json({
        diaries: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: err,
      });
    });
});

router.post("/insert", (req, res) => {
  let { title, content, date } = req.body;

  let newDiary = new Diary({
    _id: new mongoose.Types.ObjectId(),
    title: title,
    content: content,
    date: date,
  });
  console.log(newDiary);
  newDiary
    .save()
    .then((user) => {
      return res.status(201).json({
        success: true,
        msg: "Diary is now posted!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: err,
      });
    });
});

router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  let item = {
    title: req.body.title,
    content: req.body.content,
  };
  Diary.updateOne({ _id: id }, { $set: item })
    .then((user) => {
      return res.status(201).json({
        success: true,
        msg: "Diary is now updated!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: err,
      });
    });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  Diary.deleteOne({ _id: id })
    .then((user) => {
      return res.status(201).json({
        success: true,
        msg: "Diary is now deleted!",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        msg: err,
      });
    });
});

module.exports = router;
