import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <section>
      <Link to='/'>
        <h1 className="main-header">Bem vindo ao Movie List</h1>
      </Link>
    </section>
  );
};
