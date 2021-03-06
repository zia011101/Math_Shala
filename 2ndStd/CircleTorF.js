const Question =document.getElementById("queID");
const choice = Array.from(document.getElementsByClassName("choice-text"));
const ProgText=document.getElementById("ProgressText");
const Img=document.getElementById("shape");
const ScoreText=document.getElementById("Score");
const ProgBar=document.getElementById("progressBarFull");

let currentQue={};
let acceptAns=true;

let score=0;
let QueCounter=0;
let availabelQue=[];
let questions=[]

getRandomInt=(min,max)=>
{
  return Math.floor(Math.random()*(max-min+1))+min;
};

getRandomfromList=(LisT)=>{
    var tempindx = getRandomInt(0,(LisT.length-1));
    var temp=LisT[tempindx];
    return temp;
};

getRange=(min,max)=>{
    var ary =[];
    for (let i = min; i <= max; i++) {
        ary.push(i);
    };
    return ary;
};

shuffle=(array)=>{
    var currNdx=array.length,temp,ranIndx;
    while(0!==currNdx){
        ranIndx=Math.floor(Math.random()*currNdx);
        currNdx--;
        temp=array[currNdx];
        array[currNdx]=array[ranIndx];
        array[ranIndx]=temp;
    }
    return array;
};
// QueGen=(questions)=>{
//     var Groups = [5,10];
//     var sum=getRandomInt(1,100);
//     if (sum<=50) {
//         var grp=getRandomfromList(Groups);
//     } else {
//         var grp=10;
//     }
//     while (!(sum%grp==0)){
//         sum=getRandomInt(11,59);
//     }
//     var emojiBalls =["&#x1F3D0 ","&#x1F3B1 ","&#x1F3C9 ","&#x1F3C8 "]
//     var choices=[],chotemp=[],ball=getRandomfromList(emojiBalls);
//     var Ans=sum/grp;
//     chotemp[0]=Ans;
//     choices[0]=ball.repeat(Ans);
//     for (let index = 1; index <=3; index++) {
//         var sumte=getRandomInt(1,10);
//         while(chotemp.includes(sumte)){
//             sumte=getRandomInt(1,10);
//         }
//         chotemp.push(sumte);
//         choices.push(ball.repeat(sumte));
//     }
//     shuffle(choices);
//     var Que="Represent the following no. "+sum+" in group of "+grp+"\n (This emoji "+ball+" = "+grp+")";
    
//     var obj={
//         question:Que,
//         choice1:choices[0].toString(),
//         choice2:choices[1].toString(),
//         choice3:choices[2].toString(),
//         choice4:choices[3].toString(),
//         answer:(choices.indexOf(ball.repeat(Ans))+1),
//     };
//     console.log(obj.answer);
//     questions.push(obj);
// };
// for (let index = 0; index < 5 ;index++) {
//     console.log("#"+(index+1));
//     QueGen(questions);
// };
questions =[
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"A Circle have how many sides?",
        choice1:1,
        choice2:getRandomInt(1,6),   
        answer:1,
    },
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"A Circle have how many dimensons?",
        choice1:getRandomInt(4,10),
        choice2:2,   
        answer:2,
    },
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"A Circle have how many corners?",
        choice1:0,
        choice2:getRandomInt(1,4),   
        answer:1,
    },
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"The distance between the centre of a circle and the outline of the circle is same in all direction.",
        choice1:"True",
        choice2:"False",   
        answer:1,
    },
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"Which one of these objects are not in Circle shape?",
        choice1:"Tyre",   
        choice2:"Bread",
        answer:2,
    },
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"If you cut a circle in half you will get two squares.",
        choice1:"False",
        choice2:"True",   
        answer:1,
    },
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"You can draw infinite lines in circle passing through centre of circle.",
        choice1:"True",
        choice2:"False",   
        answer:1,
    },
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"What is called as the distance between any point on the circle and its centre?",
        choice1:"Length",
        choice2:"Radius",   
        answer:2,
    },
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"If you cut a Circle in half you will get two '________'",
        choice1:"Rectangles",
        choice2:"Semi Circles",   
        answer:2,
    },
    {
        imgsrc:"https://i.ya-webdesign.com/images/png-circle-4.png",
        alt:"Circle",
        question:"A Sphere is made of many Circles.",
        choice1:"True",
        choice2:"False",   
        answer:1,
    }
]
shuffle(questions)
const CORRECT_BONUS=10;
const MAX_QUESTIONS=questions.length;

startgame=()=>{
    queCount=0;
    score=0;
    availabelQue=[...questions];
    getNewQue();
};

getNewQue= () =>{
    if (availabelQue.length==0 || QueCounter>=MAX_QUESTIONS){
        //Store score in local storage
        localStorage.setItem("MostRecentScore",score)
        //Go to Score Page
        return window.location.assign("end.html");
    }
    QueCounter++;

    ProgText.innerHTML="Question "+QueCounter+"/"+MAX_QUESTIONS;
    //Update Progress Bar
    ProgBar.style.width=(QueCounter/MAX_QUESTIONS)*100+"%";

    const Queindx = Math.floor(Math.random()*availabelQue.length);
    currentQue=availabelQue[Queindx];
    Question.innerHTML=currentQue.question;
    Img.setAttribute("src",currentQue.imgsrc);
    Img.setAttribute("alt",currentQue.alt)
    choice.forEach( choice =>{
        const num=choice.dataset['no'];
        choice.innerHTML=currentQue['choice'+num];
    })
    availabelQue.splice(Queindx,1);
    acceptAns=true;
};

choice.forEach( choice => {
    choice.addEventListener("click", e =>{
        if (!acceptAns) return;
        acceptAns=false;
        const selectedChoice=e.target;
        const selectedAns=selectedChoice.dataset["no"];
        const classToApply=(selectedAns==currentQue.answer)?"correct":"incorrect";
        
        if (classToApply=="correct"){
            increScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() =>{        
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQue();
        },1000);
    });
});
increScore=(num)=>{
    score+=num;
    ScoreText.innerText=score;
};
startgame();