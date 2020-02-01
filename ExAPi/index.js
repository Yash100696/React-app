const express = require(`express`);
const app = express();
const cors = require('cors')
app.use(cors());
// app.get(`/`, (req, res) => {
//     res.sendfile(path.join(__dirname,'public','index.html'))
// });
app.use(express.json());

app.use(express.urlencoded({extended:false}))
// //Set static folder
// app.use(express.static(path.join(__dirname,`public`)));

//Members Api rotes
app.use('/api/members',require(`./routes/api/members`))

const port = process.env.port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));