import { Navigate, Route, Routes as Switch, useNavigate } from "react-router-dom";
import { CreateMovie, Home, Login, Register } from "pages";
import { IEntity } from "types";

interface RoutesProps {
	user: IEntity.User;
	onLogin: (user: IEntity.User) => void;
}

const Routes = ({ user, onLogin }: RoutesProps) => {
	const navigate = useNavigate();

	return (
		<Switch>
			<Route path="/movies">
				<Route index element={<Home user={user} />} />
				<Route
					path="create"
					element={user ? <CreateMovie navigate={navigate} /> : <Navigate to="/login" />}
				/>
			</Route>

			<Route
				path="login"
				element={user ? <Navigate to="/movies" /> : <Login onLogin={onLogin} />}
			/>
			<Route
				path="register"
				element={user ? <Navigate to="/movies" /> : <Register navigate={navigate} />}
			/>
			<Route path="*" element={<Navigate to="/movies" />} />
		</Switch>
	);
};

export default Routes;
