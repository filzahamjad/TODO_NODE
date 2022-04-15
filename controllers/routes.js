const router = require("express").Router();
const tasks = require("../models/taskModel");
router.get("/", (req, res) => {
  var mytasks;
  tasks.find({}, (err, data) => {
    if (err) {
      console.log(err);
    }
    if (data) {
      mytasks = data;
    }
    res.render("index", { data: mytasks });
  });
});

router.post("/add", (req, res) => {
  const task = req.body.task;
  tasks({ task: task }).save(function (err, doc) {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

router.post("/delete", (req, res) => {
  const id = req.body.id.trim();
  tasks.findOneAndRemove({ _id: id }, (err, doc) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

router.post("/update", (req, res) => {
  const id = req.body.id.trim();
  tasks.findOneAndUpdate({ _id: id }, { status: true }, (err, doc) => {
    if (err) {
      console.log(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
