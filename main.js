let div = $('<div>Hello World!</div>');
let body = $('body');
body.append(div);
div.on('click', function(){
    alert("Hello World!");
});

let anotherDiv = $('<div>2nd Div</div>');
body.append(anotherDiv);

let canvas = $('<canvas id="myChart"></canvas>');
anotherDiv.append(canvas);

const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
];

const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {}
};

const myChart = new Chart(document.getElementById("myChart"), config);

let anotherNotherDiv = $('<div>3rd Div</div>');
body.append(anotherNotherDiv);

let anotherCanvas = $('<canvas id="anotherChart"></canvas>');
anotherNotherDiv.append(anotherCanvas);

const data2 = {
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(75, 192, 192)',
        'rgb(255, 205, 86)',
        'rgb(201, 203, 207)',
        'rgb(54, 162, 235)'
      ]
    }]
};

const config2 = {
    type: 'polarArea',
    data: data2,
    options: {}
};

const myChart2 = new Chart(document.getElementById("anotherChart"), config2);