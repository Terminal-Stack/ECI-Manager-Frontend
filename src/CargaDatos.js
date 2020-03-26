import $ from "jquery";

var CargaDatos = (function () {

    var getNews = function () {

        var getPromise = $.get("/news");

        getPromise.then(
            function (data) {
                alert('entro');
                return data;
            },
            function () {
                alert('nell');
                return null;
                
            }
        );


    };

    var getGrades = function ( estudianteId ) {

        var getPromise = $.get("/grades/" + estudianteId);

        getPromise.then(
            function (data) {
                return data;
            },
            function () {
                return null;
            }
        );

    };

    return {
        getAllNews: function () {
            getNews()
        }
    ,
        getAllGrades: function ( carnet ) {
            getGrades(carnet)
        }
    }
})();
export default CargaDatos;
