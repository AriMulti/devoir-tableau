
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var Array = ["Prénoms", "Noms", "Couleurs"];
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
			tr.innerHTML = Array[i];

			for(let y = 0; y < 3; y++) {
				td = document.createElement("td");
				tr.appendChild(td);

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

	}
}