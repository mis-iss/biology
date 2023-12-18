//alertify.success("Correct: ");

let answer = ["розмноження","тварина","організм","статеве","поділ", "самець", 
"запліднення", "фрагментація", "самка", "брунькування", "зигота", "утворення"];

let was = [];

let progress = 0;

let num = Math.floor(1 + Math.random() * 12);
//console.log(num);

$(document).ready(function () {
	$(".progress").knob({
		'min': 0, 
		'max': 5,
		'angleOffset': -60,
		'angleArc': 120,
		'readOnly': true,
		'width' : '100%',
		'thickness': 0.2,
		'lineCap': 'round',
		'displayInput' : false,
		'bgColor' : '#cde8ea',
		'fgColor' : '#991525'
	});
	
	$("#rules").slideUp();
	$(".slideRules").click(function () {
		$("#rules").slideToggle();
	});

	startRebus(num);

	$("#btnTask1").click(function() {
		if ($("#inputTask1").val().toLowerCase() ==`${answer[num-1]}` ) {
			alert("Правильна відповідь!");
			$("#inputTask1").val("");
			progress++;
			$(".progress").val(progress).trigger('change');
			was.push(num);
			console.log(was);

			if (progress < 5) {
				do {
					num = Math.floor(1 + Math.random() * 12);
				} while (was.includes(num));
				console.log(num);
				startRebus(num);
			} else {
				$(".img, #btnTask1, #inputTask1").css({
					'display' : 'none'
				});
				$("#nextTask").css({
					'display' : 'flex'
				});
                alert("Хороша робота!");
			}
		} else {
			alert("Неправильна відповідь. Спробуйте знову!");
		}
	});
});


function startRebus (arg) {
	$("#picture").attr("src",`rebuses/${arg}.jpg`);
}