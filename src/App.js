import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
	}, []);

	return (
		<div className='App'>
			<Routes>
				{/* <Route index element={<ProductList />} /> */}
				<Route path='/dashboard/:id' element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
