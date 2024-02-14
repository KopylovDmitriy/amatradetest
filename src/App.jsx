import { HashRouter, Route, Routes } from "react-router-dom"

import "./App.css"

import { Layouts } from "./components/Layouts/Layouts"

import Main from "./pages/Main/Main"
import Listings from "./pages/Listings/Listings"
import APlus from "./pages/APlus/APlus"
import Packaging from "./pages/Packaging/Packaging"
import Stores from "./pages/Stores/Stores"
import Social from "./pages/Social/Social"
import Contacts from "./pages/Contacts/Contacts"

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Layouts />}>
					<Route path={"/"} element={<Main />} />
					<Route path={"/listings"} element={<Listings />} />
					<Route path={"/aplus"} element={<APlus />} />
					<Route path={"/packaging"} element={<Packaging />} />
					<Route path={"/stores"} element={<Stores />} />
					<Route path={"/socialmedia"} element={<Social />} />
					<Route path={"/contacts"} element={<Contacts />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}

export default App
