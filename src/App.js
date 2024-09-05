
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var table, thead, tbody, tr, td;
		var app = document.getElementById("app");
		
		table = document.createElement("table");
		app.appendChild("table");

		thead = document.createElement("thead");
		table.appendChild("thead");
		thead.innerHTML = "Undertale Goats!";

	// <table>
	// 	<thead>
	// 		Undertale Goats!
	// 	</thead>
	// 	<tbody>
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
	// 	</tbody>
	// </table>

	}
}
