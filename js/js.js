$(document).ready(function() {

	$('.collpasingSidebar').on('click', function () {
        $('.sidebar').toggleClass('active');

        if ($('.sidebar').hasClass('active')) {
  			$('#checkIfNavbarIsOpen').removeClass('no-overflow');
    	} else {
    		$('#checkIfNavbarIsOpen').addClass('no-overflow');
    	}
    });

  	$(".collpasingSidebar").click(function() {
    	return $(".collpasingSidebar").toggleClass("cross");
  	});

 //  	$("body").on('click', function () {
	// 	if($('.sidebar').hasClass('active')) {
	// 		$(this).removeClass('active');
	// 	}
	// });

    // $('#content').on('click', function () {
    // 	console.log("eghjkl")
    //     $('#sidebar.active').removeClass('active');
    // });

    var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});


});