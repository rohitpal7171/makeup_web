import { Navigate, Route, Routes } from "react-router-dom";
import PricingPage from "./components/pricing/PricingPage";
import "./css/App.css";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigate to="/pricing" replace />} />
			<Route path="/pricing" element={<PricingPage />} />
		</Routes>
	);
}

export default App;
