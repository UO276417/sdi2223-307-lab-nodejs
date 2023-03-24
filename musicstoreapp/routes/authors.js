module.exports = function (app, twig) {
    app.get('/authors', function(req, res){
        let authors = [{
            "name": "Fernando",
            "group": "CS",
            "rol": "Cantante"
        }, {
            "name": "Berto",
            "group": "CS",
            "rol": "Bateria"
        }, {
            "name": "Limon",
            "group": "CS",
            "rol": "Guitarrista"
        }]
        let response = {
            seller: "Lista de Autores",
            authors: authors
        };
        res.render("authors/authors.twig", response);
    });

    app.get('/authors/add', function(req, res) {
        res.render("authors//add.twig");
    });

    app.post('/authors/add', function(req, res){
        let response = "";
        if(typeof (req.body.name) != "undefined" && !req.body.name.trim().length <= 0) {
            response += "Autor creado:" + req.body.name + "<br>"
        }else{
            response+= "Autor no enviado en la peticion" + "<br>"
        }
        if(typeof (req.body.group) != "undefined" && !req.body.group.trim().length <= 0) {
            response += "grupo:" + req.body.group + "<br>"
        }else{
            response+= "Grupo no enviado en la peticion" + "<br>"
        }
        if(typeof (req.body.rol) != "undefined" && !req.body.rol.trim().length <= 0) {
            response += "rol:" + req.body.rol;
        }else{
            response+= "Rol no enviado en la peticion" + "<br>"
        }

        res.send(response);
    });


    app.get('/authors/*', function(req, res){
        res.redirect('/authors');
    });
}