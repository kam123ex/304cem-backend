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
  let { title, content } = req.body;
  let newDiary = new Diary({
    _id: new mongoose.Types.ObjectId(),
    title: title,
    content: content,
  });
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

// router.get("/", (req, res) => {
//   Diary.find()
//     .select("title date content _id")
//     .exec()
//     .then((result) => {
//       if (result) {
//         res.status(200).json({
//           diaries: result.map((diary) => {
//             return {
//               title: diary.title,
//               date: diary.date,
//               content: diary.content,
//               _id: diary._id,
//               request: {
//                 type: "GET",
//                 url: "http://localhost:3000/api/diaries/" + diary._id,
//               },
//             };
//           }),
//         });
//       } else {
//         console.log(result);
//         res.status(400).json({
//           msg: "No Diaries is posted.",
//         });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json({
//         msg: err,
//       });
//     });
// });

// // Router Post api/diaries
// router.post("/", (req, res) => {
//   let { title, content } = req.body;
//   let date = Date();
//   let newDiary = new Diary({
//     _id: new mongoose.Types.ObjectId(),
//     title: title,
//     date: date,
//     content: content,
//   });
//   newDiary
//     .save()
//     .then((result) => {
//       console.log(result);
//       return res.status(200).json({
//         msg: "Posted Diary successfully.",
//         createdDiary: {
//           title: result.title,
//           date: result.date,
//           content: result.content,
//           _id: result._id,
//           request: {
//             type: "GET",
//             url: "http://localhost:3000/api/diaries/" + result._id,
//           },
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// // Router Post api/diaries
// router.get("/:diariesId", (req, res) => {
//   const id = req.params.diariesId;
//   Diary.findById(id)
//     .select("title date content _id")
//     .exec()
//     .then((result) => {
//       console.log(result);
//       if (result) {
//         return res.status(200).json({
//           diary: result,
//         });
//       } else {
//         return res.status(400).json({
//           msg: "No valid ID",
//         });
//       }
//     })
//     .catch((err) => {
//       console.log(err);
//       return res.status(500).json({
//         msg: `Get ${id} not true Diaries`,
//       });
//     });
//   //   if (id == "special") {
//   //     return res.status(200).json({
//   //       msg: `Get ${id} Diaries`,
//   //       id: id,
//   //     });
//   //   } else {
//   //     return res.status(400).json({
//   //       msg: `Get ${id} not true Diaries`,
//   //     });
//   //   }
// });

// // Router Post api/diaries
// router.put("/:diariesId", (req, res) => {
//   const id = req.params.diariesId;
//   const title = req.body.title;
//   const content = req.body.content;
//   const diaryData = {
//     title: req.body.title,
//     content: req.body.content,
//   };
//   // Diary.updateOne({ _id: objectId(id) }, { $set: diaryData })
//   //   .then((result) => {
//   const updateOps = {};

//   for (const ops of req.body) {
//     updateOps[ops.propName] = ops.value;
//   }
//   Diary.update({ _id: id }, { $set: updateOps })
//     .exec()
//     .then((result) => {
//       console.log(result);
//       res.status(200).json({
//         msg: "Diary updated",
//         request: {
//           type: "GET",
//           url: "http://localhost:3000/api/diaries/" + id,
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       return res.status(500).json({
//         msg: err,
//       });
//     });
//   //   if (id == "special") {
//   //     return res.status(200).json({
//   //       msg: `Update ${id} Diaries`,
//   //       id: id,
//   //     });
//   //   } else {
//   //     return res.status(400).json({
//   //       msg: `Update ${id} not true Diaries`,
//   //     });
//   //   }
// });
// // Router Post api/diaries
// router.delete("/:diariesId", (req, res) => {
//   const id = req.params.diariesId;
//   Diary.remove({ _id: id })
//     .exec()
//     .then((result) => {
//       res.status(200).json({
//         msg: "Diary deleted",
//         request: {
//           type: "GET",
//           url: "http://localhost:3000/api/diaries",
//           body: { title: "String", date: "Date", content: "String" },
//         },
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       return res.status(500).json({
//         msg: err,
//       });
//     });
//   //   if (id == "special") {
//   //     return res.status(200).json({
//   //       msg: `Delete ${id} Diaries`,
//   //       id: id,
//   //     });
//   //   } else {
//   //     return res.status(400).json({
//   //       msg: `Get ${id} not true Diaries`,
//   //     });
//   //   }
// });
module.exports = router;
