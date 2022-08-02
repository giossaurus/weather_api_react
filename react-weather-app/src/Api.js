export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83e2b8a042msh2dc2a6cd4035939p1deb5fjsn6e475209b141',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));