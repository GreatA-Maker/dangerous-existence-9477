import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Admin/Dashboard";
import Page_Not_Found from "../Pages/Page_Not_Found/Page_Not.Found";
import Admin from "../Pages/Admin/Admin";
import Homepage from "../Pages/HomePage/Homepage";

const AdminRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/admin/login" element={<Admin />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Page_Not_Found />} />
			</Routes>
		</div>
	);
};

export default AdminRoutes;
