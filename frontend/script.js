var labelData=[],tempData=[],rateData=[];
console.log("scrip");

async function dummydata(){
    const url= "https://shubham2157.github.io/Major-Project/api/data.json";

    const response = await fetch(url);
    const chartData = await response.json();
    
    //console.log(chartData);

    const labels = chartData.feeds.map((x)=>x.entry_id);
    const temperature = chartData.feeds.map((x)=>x.field1);
    const heartRate = chartData.feeds.map((x)=>x.field2);

    //console.log(labels,temperature,heartRate);

    labelData=labels;
    tempData=temperature;
    rateData=heartRate;
}


async function displayChart(){

        await dummydata();
        let ctx = document.getElementById('myChart').getContext('2d');
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labelData,
                datasets: [{
                    label: 'Patient Temperature',
                    data: tempData,
                    backgroundColor: "Blue",
                    borderColor: ['rgba(255, 99, 132, 1)'],
                    borderWidth: 1
                },

                {
                    label: 'Patient HeartRate',
                    data: rateData,
                    backgroundColor: "Pink",
                    borderColor: ['rgba(100, 50, 122, 1)'],
                    borderWidth: 1
                }
            ]
            },
            options: {
                scales: {
                    x:{
                        label:"Number"
                    },
                    y: {
                        label:"Value",
                        beginAtZero: true
                    }
                }
            }
        });
}

var displayBtn=document.getElementById('canvasBtn');
displayBtn.addEventListener("click",displayChart);

