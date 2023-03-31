const {ObjectId} = require("mongodb");
module.exports = function (app, commentsRepository) {

    app.post('/comments/:song_id', function (req, res) {
        let comment = {
            author: req.session.user,
            text: req.body.text,
            song_id: ObjectId(req.params.song_id)
        }
        if(typeof (comment.text) != "undefined" && !comment.text.trim().length <= 0 && req.session.user != null) {
            commentsRepository.insertComment(comment, function (commentId) {
                if (commentId == null) {
                    res.send("Error");
                } else {
                    res.send("Bien insertada " + commentId);
                }
            });
        }else{
            res.send("Error de campo");
        }
    });
}
