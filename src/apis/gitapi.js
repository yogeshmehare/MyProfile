const axios = require("axios").default;

var express = require("express");
var app = express();
app.use(express.json());

const headers = {
    username: "yogeshmehare124@gmail.com",
    token: "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",
    Authorization: "Token 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",
};

async function getRepos(req, res) {
    try {
        const response = await axios.get(
            "https://api.github.com/users/yogeshmehare/repos",
            {
                headers: headers,
            }
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

app.get("/getRepos1", async function (req, res) {
    console.log("Req Came 1")
    res.json(
      {projs:[{name:"HI",year:"2020"},{name:"HI2",year:"2021"}]}
    );
});


app.get("/getRepos", async function (req, res) {
    // console.log("Req Came")
    // const r = await getRepos();
    // res.send(
    //   {projs:r}
    // );
});

var server = app.listen(3001, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port);
});
