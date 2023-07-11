import { useEffect } from "react";
import "./App.css";
import { useTelegram } from "./hooks/useTelegram";
// import Header from './components/Header/Header';
import { Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList/ProductList";
import Dashboard from "./components/Dashboard/Dashboard";
// import Form from "./components/Form/Form";

function App() {
	const { tg } = useTelegram();

	useEffect(() => {
		tg.ready();
		console.log(tg.viewportHeight, "- width -", tg.viewportWidth);
	}, []);

	return (
		<div className='App'>
			<Routes>
				<Route index element={<ProductList />} />
				{/* <Route path={"form"} element={<Form />} /> */}
				<Route path='/dashboard/:id' element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
