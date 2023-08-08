import axios from "axios";

// const date = Date.now();
// const clientId = "329721a18c01487ebe8c4f6ed920c4db";
// const lockId = "9166406";
// const accessToken = "cfbfd3e45cb1b35077f41756b8a6f448";

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

// export { requestLockStatus, openLock, closeLock, getTest };
export { getTest };