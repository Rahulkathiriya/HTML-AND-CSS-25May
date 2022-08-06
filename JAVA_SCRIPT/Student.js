let math = document.getElementById("math")
let Science = document.getElementById("Science")
let English = document.getElementById("English")
let Biology = document.getElementById("Biology")
let total = document.getElementById("total")
let grade = document.getElementById("Grade")
let Percentage = document.getElementById("Percentage")
let button = document.querySelector("button")
let title = document.getElementById("lastTitle")


function onChangeJs(sb) {
    if (sb == 'math') {
        if (math.value > 100) {
            math.style.backgroundColor = "red";
        } else {
            math.style.backgroundColor = "white";
        }
    }
    else if (sb == 'Science') {
        if (Science.value > 100) {
            Science.style.backgroundColor = "red";
        } else {
            Science.style.backgroundColor = "white";
        }
    }
    else if (sb == 'English') {
        if (English.value > 100) {
            English.style.backgroundColor = "red";
        } else {
            English.style.backgroundColor = "white";
        }
    }
    else if (sb == 'Biology') {
        if (Biology.value > 100) {
            Biology.style.backgroundColor = "red";
        } else {
            Biology.style.backgroundColor = "white";
        }
    }

}

button.addEventListener("click", () => {
    var isError = false;
    if (math.value > 100 || Science.value > 100 || English.value > 100 || Biology.value > 100) {
        alert("Enter Marks between 0 to 100")
        isError = true;
    }

    if (math.value === "" || Science.value === "" || English.value === "" || Biology.value === "") {
        alert("Please fill all the filds")
        isError = true;
    }
    if (!isError) {

        let totalMarks = Number(math.value) + Number(Science.value) + Number(English.value) + Number(Biology.value)

        total.textContent = `${totalMarks}`

        //============================== Peercentage Count======================

        let percentageCount = totalMarks / 4;

        Percentage.textContent = `${percentageCount}%`
        if (math.value <= 33 || Science.value <= 33 || English.value <= 33 || Biology.value <= 33) {
            total.textContent = null
            Percentage.textContent = null
            grade.textContent = "Fail"
        }
        else if (percentageCount <= 35) {
            grade.textContent = "Fail"
            title.textContent = "You are Fail"
        }
        else if (percentageCount <= 55) {
            grade.textContent = "Pass"
            title.textContent = "You are pass"
        }
        else if (percentageCount <= 75) {
            grade.textContent = "Second class"
            title.textContent = "You are pass With Second Class"
        }
        else if (percentageCount <= 100) {
            grade.textContent = "First class"
            title.textContent = "You are pass with First Class"
        }




    }

});

