async function getTest(command) {
	const url = `https://yarociytech.com:5000/dashboard/batumi/lock/${command}`;
	console.log(url);
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log("Data is -", data);
			return data;
		} else {
			throw new Error("Request error");
		}
	} catch (error) {
		return error;
	}
}

async function sendState(state) {
	const url = `https://yarociytech.com:5000/send/batumi/lock/${state}`;
	console.log(url);
	try {
		const response = await fetch(url);
		if (response.ok) {
			return true;
		} else {
			throw new Error("Request error");
		}
	} catch (error) {
		return error;
	}
}
export { getTest, sendState };
