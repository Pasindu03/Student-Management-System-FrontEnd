$(document).ready(function (){
    $("#btnSubmit").on("click",
        function () {
            event.preventDefault();

            let nameF = $("#inputName").val();
            let cityF = $("#inputCity").val();
            let emailF = $("#inputEmail").val();
            let levelF = $("#inputLevel").val();

            console.log(nameF);
            console.log(cityF);
            console.log(emailF);
            console.log(levelF);

            //create an object for accumulate data
            const studentData = {
                name: nameF,
                city: cityF,
                email: emailF,
                level: levelF
            };
            console.log(studentData);

            //create JSON
            const studentJSON = JSON.stringify(studentData);
            console.log(studentJSON);

            //Save the data with AJAX
            const http = new XMLHttpRequest();
            http.onreadystatechange = () => {
                if (http.readyState === 4){
                    if (http.status === 200){
                        var JsonTypeObject = JSON.stringify(http.responseText);
                        console.log(JsonTypeObject);
                    } else {
                        console.log("Failed")
                        console.log("Status code : " + http.status);
                        console.log("readyState" + http.readyState);
                    }
                } else {
                    console.log("Processing Stage : " , http.readyState);
                }
            }

            http.open("POST", "http://localhost:8080/Stumgmt2024/student",true);
            http.setRequestHeader("Content-Type", "application/json");
            http.send(studentJSON);

        });
});
