//variables
const c0 = $(".canvas0");
const ctx0 = c0[0].getContext("2d");
ctx0.moveTo(15, 0);
ctx0.lineTo(200, 0);
ctx0.lineTo(500, 300);
ctx0.fillstyle="#000000";
ctx0.stroke();

const c1 = $(".canvas1");
const ctx1 = c1[0].getContext("2d");
ctx1.moveTo(300, 0);
ctx1.lineTo(150, 0);
ctx1.lineTo(20, 80);
ctx1.fillstyle="#000000";
ctx1.stroke();

const c2 = $(".canvas2");
const ctx2 = c2[0].getContext("2d");
ctx2.moveTo(10, 100);
ctx2.lineTo(300, 100);
ctx2.lineTo(400, 20);
ctx2.fillstyle="#000000";
ctx2.stroke();

const xValues = [100,200,300,400,500,600,700,800,900,1000];

//Multiple Lines
setInterval(timer,2000);
function timer(){
  new Chart("myChart",{
    type: "line",
    data: {
      labels: xValues,
      datasets: [{ 
        data: random(),
        borderColor: "black",
        fill: false
      }, { 
        data: random(),
        borderColor: "green",
        fill: false
      }, { 
        data: random(),
        borderColor: "lightgreen",
        fill: false
      }]
    },
    options: {
      legend: {display: false}
    }
  });}

function random(){
  let valeuY=[];
  for(let i=0;i<10;i++){
    valeuY.push(Math.floor(Math.random()*101))
  }
  return valeuY;
}


//PieChart
var xxValues = ["Stability", "Frequency", "Data", "Protection", "Strategies"];
var yValues = [55, 49, 44, 24, 15];
var barColors= [
  "#2a2e2d",
  "#79e7ce",
  "#a1df25",
  "#8eac50",
  "#1e7145"
];

new Chart("myChart2", {
  type: "pie",
  data: {
    labels: xxValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});

$("#myChart").style.transition = "all 1s";