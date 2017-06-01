

var path = require("path");

var friendList = require("../data/friends");


module.exports = function(app) {

    app.get("/api/friends", function (req, res) {

        res.json(friendList.friends);

    });

    app.post("/api/friends", function (req, res) {

        //console.log(friendList);
        var matchTotal = 50;
        var matchIndex;
        var scoreArray = [];

        // getting the scores for every friend in the friendList array
        for(var x = 0; x < friendList.friends.length; x++){
            var score = 0;

            for(var i = 0; i < friendList.friends[x].scores.length; i++){

                score += Math.abs(friendList.friends[x].scores[i] - req.body.scores[i]);

            }
            scoreArray.push(score);
        }


        for(var y = 0; y < scoreArray.length; y++){

            if(scoreArray[y] < matchTotal){
                matchIndex = y;
                matchTotal = scoreArray[y];
            }

        }

        res.json(friendList.friends[matchIndex]);

        // once we are done showing the user his/her match, we add the new user to the friendList
        friendList.friends.push(req.body);

    });

};