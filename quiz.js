const quiz = [
    {
        "q":'Which hormone is known as fight or flight hormone .',
        "option":["Thyroxine","Adrenaline","Insulin","Oestrogen"],
        "answer":1
    },
    {
        "q":'Which organelle is known as the powerhouse of cell .',
        "option":["Ribosomes","Endoplasmic reticulum","Nuclei","Mitochondria"],
        "answer":3
    },
    {
        "q":"The deficiency of Thyroxine hormone causes .",
        "option":["Exopthalmic Goitre","Gigantism","Simple Goitre","Dwarfism"],
        "answer":2
    },
    {
        "q":"What is the chemical formula of Ammonium .",
        "option":["NH4","CaCO3","NH3","CH4"],
        "answer":0
    },
    {
        "q":"What is the valency of carbon . ",
        "option":["1","3","4","2"],
        "answer":2
    },
    {
        "q":"CGS unit of Gravitational Potential Energy . ",
        "option":["N","J/kg","erg","erg g-1"],
        "answer":3
    },
    {
        "q":"Formula of power . ",
        "option":["Work / Time","Speed / Time","Work * Time","Speed * Time"],
        "answer":0
    },
    {
        "q":"Who is known as the father of Indian Renaissance . ",
        "option":["Raja Ram Mohan Roy","Bal Gangadhar Tilak","A.O. Hume","Swami Vivekananda"],
        "answer":0
    },
    {
        "q":"Where did Renaissance start .",
        "option":["Germany","Russia","Belgium","Italy"],
        "answer":3
    },
    {
        "q":" When did Renaissance start . ",
        "option":["11th century","15th century","13th century","14th century"],
        "answer":3
    }
]

var question_number , Question , result_container , container , next

let counter = 0;
let i = 0;
let correct_answer = 0;
let question_attempt = 0;
let availableQuestion=[];

function setquestion(){
    const value = quiz.length;
    for (let i = 1;i < value ; i++ ){

        availableQuestion.push(quiz)

    }

}



question1=quiz;



function getQuestion(){


    
    counter = counter+1
    question_number.innerHTML = "Q" + (counter) + " : " ;
    
    Question.innerHTML = quiz[i]["q"];

    document.getElementById("5").innerHTML = question1[i]["option"][0]
    document.getElementById("6").innerHTML = question1[i]["option"][1]
    document.getElementById("7").innerHTML = question1[i]["option"][2]
    document.getElementById("8").innerHTML = question1[i]["option"][3]

    var correctAnswer=Array.prototype.slice.call(document.getElementsByClassName("right"))
    var correctAnswer=Array.prototype.slice.call(document.getElementsByClassName("wrong"))

    if(correctAnswer?.length> 0){
        correctAnswer.forEach(element => {
            element.classList.remove('right')
            element.classList.remove('wrong')
        });
    }



    i = i+1


    if (i == quiz.length){

        quiz_over()

    }


}


function quiz_over(){
    
    result_container.classList.remove("hide")
    
    next.classList.add("hide")

    container.classList.add("hide")


    document.getElementById("tq").innerHTML = quiz.length;
    document.getElementById("Question_Attempt").innerHTML = question_attempt;
    document.getElementById("correct").innerHTML = correct_answer;
    document.getElementById("incorrect").innerHTML = question_attempt - correct_answer ;
    document.getElementById("ts").innerHTML = (correct_answer/quiz.length)*100 + "%";



}






function getResult(element){
    var id=element.id;
    
    question_attempt = question_attempt+1

    if (id == quiz[i-1].answer){

        element.classList.add("right")
        correct_answer = correct_answer +1
        
    }
    else{

        element.classList.add("wrong")

    }
    
}







function reload(){
    setquestion()
    getQuestion()
   

    i = 0;
    counter = 0 ;
    

    result_container.classList.add("hide")
    
    next.classList.remove("hide")

    container.classList.remove("hide")

    


}


window.onload = function(){

    question_number = document.querySelector(".question_number");
    Question = document.querySelector(".Question");

    result_container = document.querySelector(".result_container")

    container=document.querySelector(".container")
    
    next=document.querySelector(".next")


    getQuestion()
    setquestion()
    getResult()

}