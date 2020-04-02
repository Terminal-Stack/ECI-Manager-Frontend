import $ from "jquery";
import axios from 'axios';
import AuthenticationService from "./_services/AuthenticationService";
const API_URL = 'http://ec2-54-89-178-141.compute-1.amazonaws.com';

var CargaDatos = (function () {

    var getNews = function () {

        var getPromise = axios.get(`${API_URL}/news`);
        
        getPromise.then(
            function (data) {
                alert(data)
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
export default CargaDatos;
