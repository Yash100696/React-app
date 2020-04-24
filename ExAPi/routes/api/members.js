const express = require(`express`);
const router = express.Router();
const members = require(`../../Members`)


router.get(`/`, (req, res) => {
    res.send(members);
});

//get single member
router.get(`/:id`, (req, res) => {
    const found = members.some(elem => elem.id == req.params.id);
    found ?
        res.json(members.filter(elem => elem.id == req.params.id)) :
        res.status(500).json({ msg: `No member for id:${req.params.id}` })
});

//Create member
router.post('/saveMember', (req, res) => {
    members.sort((a, b) => a.id - b.id)
    let last = members[members.length - 1].id++;
    req.body.id = last;
    members.push(req.body)
    res.json(members)
})

module.exports = router;