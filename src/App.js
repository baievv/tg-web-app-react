import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Home from "./components/Home/home";

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<Routes>
			<Route index element={<Home />} />
			<Route path='/dashboard/:id' element={<Dashboard />} />
		</Routes>
	);
}

export default App;
