
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var Array = ["○ Prénoms:", "○ Noms:", "○ Couleurs:"];
		var Prenom = ["•Toriel", "•Asgore", "•Asriel"];
		var Nom = ["•Dreemurr", "•Dreemurr", "•Dreemurr"]; 
		var Couleurs = ["•Mauve et blanc", "•Mauve et jaune", "•Jaune et vert"]; 
		var table, thead, h1, h2, h3, tbody, tr, td;
		var app = document.getElementById("app");
		app.style.backgroundColor = "light grey";
		
		table = document.createElement("table");
		app.appendChild(table);
		table.style.textAlign = "center";
		table.style.display = "grid";
		table.style.alignContent = "center";

		thead = document.createElement("thead");
		table.appendChild(thead);

		h1 = document.createElement("h1");
		thead.appendChild(h1);
		h1.innerHTML = "♪ Undertale Goats ♫";
		h1.style.border = "3px, solid, black";
		h1.style.backgroundColor = "rgb(230, 230, 230)";

		tbody = document.createElement("tbody");
		table.appendChild(tbody);
		tbody.style.border = "3px, solid, black";
		tbody.style.display = "flex";
		tbody.style.flexDirection = "row";
		tbody.style.justifyContent = "space-around";

		for(let i = 0; i < 3; i++) {
			tr = document.createElement("tr");
			tbody.appendChild(tr);
			tr.style.display = "flex";
			tr.style.flexDirection = "column";
			tr.style.justifyContent = "center";

			h2 = document.createElement("h2");
			tr.appendChild(h2);
			h2.innerHTML = Array[i];

			for(let y = 0; y < 3; y++) {
				td = document.createElement("td");
				tr.appendChild(td);
				h3 = document.createElement("h3");
				tr.appendChild(h3);

				if(i === 0) {
					h3.innerHTML = Prenom[y];
				}
				if(i === 1) {
					h3.innerHTML = Nom[y];
				}
				if(i === 2) {
					h3.innerHTML = Couleurs[y];
				}
			}
		}

	}
}