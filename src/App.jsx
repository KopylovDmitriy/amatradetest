import { HashRouter, Route, Routes } from "react-router-dom"

import "./App.css"

import { Layouts } from "./components/Layouts/Layouts"
import A_Content from "./pages/A+ content/A+Content"
import InstaPosts from "./pages/InstaPosts/InstaPosts"
import Listings from "./pages/Listings/Listings"
import Main from "./pages/Main/Main"

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Layouts />}>
					<Route path={"/"} element={<Main />} />
					<Route path={"/listings"} element={<Listings />} />
					<Route path={"/a+_content"} element={<A_Content />} />
					<Route path={"/insta_posts"} element={<InstaPosts />} />
				</Route>
			</Routes>
		</HashRouter>
	)
}

export default App
