# gchart.js v1.7
# SGNLS.net 2013

google.setOnLoadCallback(drawChartA);
function drawChartA() {
	var dataA = google.visualization.arrayToDataTable([
		['Date', 'Home', 'Work'],
		['Sun 17th', 0, 0],
		['Mon 18th', 1170, 460],
		['Tue 19th', 660, 1120],
		['Wed 20th', 1000, 400],
		['Thu 21st', 1170, 460],
		['Fri 22nd', 660, 1120],
		['Sat 23rd', 1030, 542]
]);

var optionsA = {
	colors: ['black','red'],
	fontName: 'Open Sans',
	fontSize: 12,
	bold: false,
	color: '#111',
	title: 'Tracks per Location',
	titlePosition: 'out',
	titleTextStyle: {
		fontName: 'Open Sans',
		fontSize: 12,
		bold: true,
		color: '#111',
		// auraColor: '#fff',
		opacity: 1
	},
		curveType: 'function',
		legend: { position: 'bottom'
	}
};
var chartA = new google.visualization.AreaChart(document.getElementById('curve_chartA'));
chartA.draw(dataA, optionsA);
}

google.setOnLoadCallback(drawChartB);
function drawChartB() {
	var dataB = google.visualization.arrayToDataTable([
 	['Year', 'Sales', 'Expenses','Complaints'],
	['2004', 0, 0, 0],
	['2005', 1, 2, 3],
	['2006', 2, 2, 3],
	['2007', 3, 2, 3],
	['2008', 4, 2, 3],
	['2009', 5, 2, 3],
	['2004', 0, 0, 0],
	['2005', -1, 2, 3],
	['2006', 2, 2, 3],
	['2008', 4, 2, 3],
	['2009', 5, 2, 3],
	['2004', 0, 0, 0],
	['2005', 1, 2, 3],
	['2006', 2, 2, 3],
	['2007', 3, 2, 3],
	['2008', 4, 2, 3],
	['2007', 3, 2, 3],
	['2008', 4, 2, 3],
	['2009', 5, 2, 3],
	['2009', 5, 2, 3],
	['2010', 6, 2, 3]
]);

var optionsB = {
	colors: ['#aaa','#ff0000','#111'],
	fontName: 'Open Sans',
	fontSize: 12,
	bold: false,
	color: '#111',
	title: 'Visitors per Day',
	titlePosition: 'out',
	titleTextStyle: {
		fontName: 'Open Sans',
		fontSize: 12,
		bold: true,
		color: '#111',
		// auraColor: '#fff',
		opacity: 1
	},
		curveType: 'function',
		legend: { position: 'bottom'
	}
};
var chartB = new google.visualization.LineChart(document.getElementById('area_chartB'));
chartB.draw(dataB, optionsB);
}

google.setOnLoadCallback(drawRegionsMap);
function drawRegionsMap() {
	var dataC = google.visualization.arrayToDataTable([
		['Country', 'Popularity'],
		['Germany', 200],
		['United States', 300],
		['Brazil', 400],
 		['Canada', 500],
 		['France', 600],
 		['RU', 700]
	]);
	var optionsC = {};
	var chartC = new google.visualization.GeoChart(document.getElementById('regions_chartC'));
	chartC.draw(dataC, optionsC);
}
