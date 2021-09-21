//filter button
document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});
//profile button
document.querySelector('.more-button').addEventListener('click', function () {
    document.querySelector('.list-container').classList.toggle('active');
});
//order grid
document.querySelector(".ordr-grid").addEventListener("click", function () {
  document.querySelector(".ordr-list").classList.remove("active");
  document.querySelector(".ordr-grid").classList.add("active");
  document.querySelector(".orders-area-wrapper").classList.add("gridView");
  document
    .querySelector(".orders-area-wrapper")
    .classList.remove("tableView");
});
//order list
document.querySelector(".ordr-list").addEventListener("click", function () {
  document.querySelector(".ordr-list").classList.add("active");
  document.querySelector(".ordr-grid").classList.remove("active");
  document.querySelector(".orders-area-wrapper").classList.remove("gridView");
  document.querySelector(".orders-area-wrapper").classList.add("tableView");
});

function retailerdashboard() {
  document.getElementById("retailerproducts").style.display = "none";
  document.getElementById("retailerorders").style.display = "none";
  document.getElementById("retailerdashboard").style.display = "block";

  document.getElementById("active2").classList.remove("active");
  document.getElementById("active3").classList.remove("active");
  document.getElementById("active1").classList.add("active");
}
function retailerorders() {
	document.getElementById("retailerdashboard").style.display = "none";
  	document.getElementById("retailerproducts").style.display = "none";
  	document.getElementById("retailerorders").style.display = "block";

	document.getElementById("active1").classList.remove("active");
	document.getElementById("active3").classList.remove("active");
	document.getElementById("active2").classList.add("active");
}
function retailerproducts() {
	document.getElementById("retailerdashboard").style.display = "none";
  	document.getElementById("retailerorders").style.display = "none";
  	document.getElementById("retailerproducts").style.display = "block";

	document.getElementById("active1").classList.remove("active");
	document.getElementById("active2").classList.remove("active");
	document.getElementById("active3").classList.add("active");
}


/*********************Dashboard*********************/

var chart    = document.getElementById('chart').getContext('2d'),
    gradient = chart.createLinearGradient(0, 0, 0, 450);

gradient.addColorStop(0, 'rgba(0, 199, 214, 0.32)');
gradient.addColorStop(0.3, 'rgba(0, 199, 214, 0.1)');
gradient.addColorStop(1, 'rgba(0, 199, 214, 0)');


var data  = {
    labels: [ 'January', 'February', 'March', 'April', 'May', 'June', 'July','August','September','October', 'November','December' ],
    datasets: [{
			label: 'Applications',
			backgroundColor: gradient,
			pointBackgroundColor: '#00c7d6',
			borderWidth: 1,
			borderColor: '#0e1a2f',
			data: [60, 45, 80, 30, 35, 55,25,80,40,50,80,50]
    }]
};

var options = {
	responsive: true,
	maintainAspectRatio: true,
	animation: {
		easing: 'easeInOutQuad',
		duration: 520
	},
	scales: {
		yAxes: [{
      ticks: {
        fontColor: '#5e6a81'
      },
			gridLines: {
				color: 'rgba(200, 200, 200, 0.08)',
				lineWidth: 1
			}
		}],
    xAxes:[{
      ticks: {
        fontColor: '#5e6a81'
      }
    }]
	},
	elements: {
		line: {
			tension: 0.4
		}
	},
	legend: {
		display: false
	},
	point: {
		backgroundColor: '#00c7d6'
	},
	tooltips: {
		titleFontFamily: 'Poppins',
		backgroundColor: 'rgba(0,0,0,0.4)',
		titleFontColor: 'white',
		caretSize: 5,
		cornerRadius: 2,
		xPadding: 10,
		yPadding: 10
	}
};

var chartInstance = new Chart(chart, {
    type: 'line',
    data: data,
		options: options
});
