


export async function getCharacters(){
		try {
			let response = await fetch('https://www.swapi.tech/api/people',{
			method: 'GET'
		})
		let data = await response.json()
        if (response.status === 200) {
            return data.results
        }
		} catch (error) {
			console.log(error);
		}
	}

export async function getPlanets(){
		try {
			let response = await fetch('https://www.swapi.tech/api/planets',{
			method: 'GET'
		})
		let data = await response.json()
        if (response.status === 200) {
            return data.results
        }	
		} catch (error) {
			console.log(error);
		}
	}

export async function getCharacterInfo(type, id) {
	try {
    const response = await fetch(`https://www.swapi.tech/api/${type}/${id}`);
    const data = await response.json();
    return data.result;
  } catch (error) {
    console.error(`Error fetching ${type} with id ${id}:`, error);
  }
}

export async function getPlanetInfo(url) {
	try {
		const response = await fetch(url);
		if (!response.ok) throw new Error("Failed to fetch planet");
		const data = await response.json();
		return data.result.properties.name;
	} catch (error) {
		console.error(`Error fetching planet name from ${url}:`, error);
		return null;
	}
}