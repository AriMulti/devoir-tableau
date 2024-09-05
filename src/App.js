
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var Prenom = ["Toriel", "Asgore", "Asriel"];
		var Nom = ["Dreemurr", "Dreemurr", "Dreemurr"]; 
		var Couleurs = ["Mauve et blanc", "Mauve et jaune", "Jaune et vert"]; 
		var table, thead, tbody, tr, td;
		var app = document.getElementById("app");

		table = document.createElement("table");
		app.appendChild(table);


		thead = document.createElement("thead");
		table.appendChild(thead);
		thead.innerHTML = "Undertale Goats!";
		tbody = document.createElement("tbody");
		table.appendChild(tbody);

		for(let i = 0; i < 3; i++) {
			tr = document.createElement("tr");
			tbody.appendChild(tr);

			console.log("First boucle");
			for(let y = 0; y < 3; y++) {
				td = document.createElement("td");
				tr.appendChild(td);
				console.log("2 boucle");
				if(i === 0) {
					td.innerHTML = Prenom[y];
				}
				if(i === 1) {
					td.innerHTML = Nom[y];
				}
				if(i === 2) {
					td.innerHTML = Couleurs[y];
				}
			}
		}


	// 		<tr>
	// 			<td>Toriel</td>
	// 			<td>Asgore</td>
	// 			<td>Asriel</td>
	// 		</tr>
	// 		<tr>
	// 			<td>Dreemurr</td>
	// 			<td>Dreemurr</td>
	// 			<td>Dreemurr</td>
	// 		</tr>
	// 		<tr>
	// 			<td>Mauve et blanc</td>
	// 			<td>Mauve et jaune</td>
	// 			<td>Jaune et vert</td>
	// 		</tr>

	}
}
