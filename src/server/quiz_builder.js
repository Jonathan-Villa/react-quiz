function determineSprints() {

	var sprints = [];
	var counter = 1;
	
	while (counter <= 3) {
		var bool = document.getElementById("sprint_" + counter).checked;
		if (bool == true) {
			sprints.push(counter);
		}
		counter++;
	}
	console.log(sprints);
	buildQuiz(sprints);
}

function buildQuiz(sprints) {

	var generatedQuizArray = [];

	var questionPoolRequest = new XMLHttpRequest();
	questionPoolRequest.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var questionPoolIndex = JSON.parse(this.responseText);
			for (var i = 0; i < questionPoolIndex.length; i++) {
				for (var j = 0; j < sprints.length; j++) {
					if (questionPoolIndex[i].sprint == sprints[j]) {
						generatedQuizArray.push(questionPoolIndex[i]);
					}
				}
			}
		}
	};
	questionPoolRequest.open('GET', 'generate_json.php', true);
	questionPoolRequest.send();

	console.log(generatedQuizArray);

};


