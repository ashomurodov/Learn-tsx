export default function NavBar({ amount }: { amount: number }) {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container justify-content-start">
				<span className="navbar-brand mb-0 h1">PDP-G-8</span>
				{amount > 0 && <span className="badge bg-dark ms-2 ">{amount}</span>}
			</div>
		</nav>
	);
}
