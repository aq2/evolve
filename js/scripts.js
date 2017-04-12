var bitlength = 10;
var populationSize = 10;
var solutions = new Array(populationSize);
document.getElementById('selectionDiv').style.visibility = 'hidden';
document.getElementById('parentsDiv').style.visibility = 'hidden';


function generateRandomSolutions() {
	// generate p different solutions
	for (var i=0; i<populationSize; i++) {
		solutions[i] = '';
		for (var j=0; j<bitlength; j++) {
			var randomBit = Math.round(Math.random());
			solutions[i] += randomBit;
		}
		console.log(solutions[i]);
	}

	// clear current table
	document.getElementById("populationTable").innerHTML = "";
	tableCreate(solutions);
	document.getElementById('selectionDiv').style.visibility = 'visible';
}


function tableCreate(solutions){
    // var body  = document.body
    var popDiv = document.getElementById('populationDiv');
    var tbl = document.getElementById('populationTable');
    var thead = tbl.insertRow();
    var title = thead.insertCell();
    title.appendChild(document.createTextNode('list of potential solutions'));
    title.setAttribute('colSpan', bitlength+1);
    var fit = thead.insertCell();
    fit.appendChild(document.createTextNode('fit'));

    for(var i=0; i<populationSize; i++) {
        var fitness = 0;
        var tr = tbl.insertRow();
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(i));
        for(var j=0; j<bitlength; j++) {
            var td = tr.insertCell();
           	td.appendChild(document.createTextNode(solutions[i][j]));
			if (solutions[i][j] === '1') {
           		td.style.backgroundColor = 'blue';
           		fitness++;
           	} else {
           		td.style.backgroundColor = 'orange';           		
           	}
        }
        var td = tr.insertCell();
        td.appendChild(document.createTextNode(fitness));
    }
    popDiv.appendChild(tbl);
}


function runTournament() {
	fittestCandidate = -1;
	bestFitness = -1;
	// tournamentSize = tournamentForm.elements['tourneySize'].value;
	tournamentSize = tourneySize.value;
	// candidates are all possible choices to be contestants in the tourney
	var candidates = new Array(populationSize);
	var contestants = new Array(tournamentSize);
	for (var i=0; i<tournamentSize; i++) {
		candidates[i] = i;
	}

	var popDiv = document.getElementById('selectionDiv');
    var tbl = document.getElementById('tournamentTable');
    var thead = tbl.insertRow();
    var title = thead.insertCell();
    title.appendChild(document.createTextNode('list of potential solutions'));
    title.setAttribute('colSpan', bitlength+1);
    var fit = thead.insertCell();
    fit.appendChild(document.createTextNode('fit'));

	for (var j=0; j<tournamentSize; j++) {
		// random selection from candidates
		// var randy = Math.round(Math.random()*candidates.length);
		var randy = Math.round(Math.random()*tournamentSize);

		// add to contestants
		contestants[j] = randy;

		var rows = document.getElementById('populationTable').getElementsByTagName('tr');
		rows[randy].style.backgroundColor='white';


		// var body  = document.body
    


		// populationTable.nth-child(randy)
		// remove from candidates, selection without replacement
		// candidates.splice(randy, 1)
	}
	document.getElementById('parentsDiv').style.visibility = 'visible';
	alert();

	// so now we have contestants array [3,4,1,7] to enter tourney
	// display contestant table
	// highlight winner
	// stick it in parents div table
	// show get second parent button
	// rinse and repeat
}













function addTable(solutions) {
    var myTableDiv = document.getElementById("population");
    // var table = document.createElement('TABLE');
    var table = document.getElementById('populationTable');

    // table.border = '1';
    var tableHead = document.createElement('THEAD');
    table.appendChild(tableHead);

 var tableBody = document.createElement('TBODY');
    table.appendChild(tableBody);

    // var tr = document.createElement('TR');
    // tableBody.appendChild(tr);

    // for (var i=0; i<bitlength; i++) {
    // 	table.appendChild();
    // }

    for (var i = 0; i < populationSize; i++) {
        var tr = document.createElement('TR');
        tableBody.appendChild(tr);
        var fitness = 0;

        for (var j = 0; j < bitlength; j++) {
            var td = document.createElement('TD');
            // td.width = '25';
            td.appendChild(document.createTextNode(solutions[i][j]));
            if (solutions[i][j] === '1') {
            	td.style.backgroundColor = 'blue';
            	fitness++;
            }
            tr.appendChild(td);
        }
        tr.appendChild(document.createTextNode(fitness));
    }
    myTableDiv.appendChild(table);
}