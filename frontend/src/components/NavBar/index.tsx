import ImgLogo from 'assets/img/logoNoBackground.png'
const NavBar = () => {
  return (
    <div className="flex flex-col md:flexrow items-center py-3 md:px-4 mb-3 bg-gray-50 border-bottom shadow-sm shadow-gray-300 ">
  <div className="container">
    <nav className="my-2 md:my-0 md:mr-3">
      <img src={ ImgLogo } alt="DevSuperior" width="80" />
    </nav>
  </div>
</div>
  );
}

export default NavBar;