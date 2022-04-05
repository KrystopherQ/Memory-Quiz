var r = document.querySelector(".r")
var box = document.querySelector(".box")
var lfg = document.querySelector(".lfg")
var ta = document.querySelector(".ta")
var start = document.querySelector(".start")
var stpw = document.querySelector(".stpw")
var ask = document.querySelector(".ask")
var mca = document.querySelector("A")
var mcb = document.querySelector("B")
var mcc = document.querySelector("C")
var correct = localStorage.getItem("correct")


function test() {}


const questions = [{
        q: "What does JS stand for?",
        answers: {
            mca: "Just Saying",
            mcb: "Java Script",
            mcc: "John Steinbeck",
        },
        correctA: "B"
    },
    {
        q: "Who created Jquery?",
        answers: {
            mca: "Steve Jobs",
            mcb: "William Gates",
            mcc: "John Resig",

        },
        correctA: "C"
    },
    {
        q: "What does HTML stand for?",
        answers: {
            mca: "Hypertext Markup Language",
            mcb: "Hypertext Markdown Language",
            mcc: "Hippytext Make Love Not War",
        },
        correctA: "A"
    },
    {
        q: "What's 9 +10 = ",
        answers: {
            mca: "19",
            mcb: "21",
            mcc: "1",
        },
        correctA: "B"
    }
];

start.addEventListener("click", function() {
    start.setAttribute("style", "display:none")
})