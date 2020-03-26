import $ from "jquery";

var cargaDatos = (function () {

    var getNews = function () {

        var getPromise = $.get("/news");

        getPromise.then(
            function (data) {

                return data;
            },
            function () {
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

    var getGradesBySemester = function ( estudianteId, semester ) {

        var getPromise = $.get("/grades/" + estudianteId +"?semester="+semester);

        getPromise.then(
            function (data) {
                return data;
            },
            function () {
                return null;
            }
        );

    };

    var getStudentByCollegeId = function ( CollegeId ) {

        var getPromise = $.get("/students/" + CollegeId);

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
        },

        getAllGradesBySemester:function (id, semester){
            getGradesBySemester(id,semester)
        },
        getStudentByCollegeId:function (collegeId){
            getStudentByCollegeId(collegeId)
        }
    }

})();
export default cargaDatos;
