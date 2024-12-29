import Logo from "../assets/imgs/logo.svg";

const Header = () => {
  return (
    <header className="bg-slate-800">
      <div className="mx-auto container px-5 py-16">
        <div className="flex justify-between items-center">
          <div>
            <img className="w-32" src={Logo} alt="Logo" />
          </div>
          <nav></nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
