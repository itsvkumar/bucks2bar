window.onload = function () {
    document.getElementById('download').addEventListener('click', function() {
    var canvas = document.getElementById('myChart');
    var imgURL = canvas.toDataURL('image/png');
    var link = document.createElement('a');
    link.download = 'chart.png';
    link.href = imgURL;
    link.click();
});
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            },
            {
                label: 'Expenses',
                data: [],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    document.querySelector('a[data-bs-toggle="tab"][href="#chart"]').addEventListener('click', function () {

        let januaryIncome = document.getElementById('january-income').value;
        let januaryExpenses = document.getElementById('january-expenses').value;

        let februaryIncome = document.getElementById('february-income').value;
        let februaryExpenses = document.getElementById('february-expenses').value;

        let marchIncome = document.getElementById('march-income').value;
        let marchExpenses = document.getElementById('march-expenses').value;

        let aprilIncome = document.getElementById('april-income').value;
        let aprilExpenses = document.getElementById('april-expenses').value;

        let mayIncome = document.getElementById('may-income').value;
        let mayExpenses = document.getElementById('may-expenses').value;

        let juneIncome = document.getElementById('june-income').value;
        let juneExpenses = document.getElementById('june-expenses').value;

        let julyIncome = document.getElementById('july-income').value;
        let julyExpenses = document.getElementById('july-expenses').value;

        let augustIncome = document.getElementById('august-income').value;
        let augustExpenses = document.getElementById('august-expenses').value;

        let septemberIncome = document.getElementById('september-income').value;
        let septemberExpenses = document.getElementById('september-expenses').value;

        let octoberIncome = document.getElementById('october-income').value;
        let octoberExpenses = document.getElementById('october-expenses').value;

        let novemberIncome = document.getElementById('november-income').value;
        let novemberExpenses = document.getElementById('november-expenses').value;

        let decemberIncome = document.getElementById('december-income').value;
        let decemberExpenses = document.getElementById('december-expenses').value;

        var incomeData = [
            januaryIncome, februaryIncome, marchIncome, aprilIncome, mayIncome, juneIncome,
            julyIncome, augustIncome, septemberIncome, octoberIncome, novemberIncome, decemberIncome
        ];

        var expensesData = [
            januaryExpenses, februaryExpenses, marchExpenses, aprilExpenses, mayExpenses, juneExpenses,
            julyExpenses, augustExpenses, septemberExpenses, octoberExpenses, novemberExpenses, decemberExpenses
        ];

        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;

        myChart.update();


    });
};