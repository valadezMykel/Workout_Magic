module.exports = (app) => {

    app.get("/exercise", (req, res) => {
        res.redirect("/exercise")
    });

    app.get("/stats", (req, res) => {
        res.redirect("/stats")
    });
}