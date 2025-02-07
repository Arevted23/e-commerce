import "./component_navigation.css";
export const NavigationComponent = () => {
  return (
    <>
      <div className="bigSpanMenu">
        <div className="spanLogo">
          <h1>Drive Your Dream</h1>
        </div>
        <div className="greatUser">
          <span>
            Hi Jhonatan Espinosa <br /> Monroy
          </span>
        </div>
      </div>
      <nav className="navBar">
        <div className="navigationMobile">
          <ul className="ulNav">
            <li>
              <a href="#">
                <img src="" alt="Avatar Image" />
              </a>
            </li>
            <li>
              <a href="">Settings</a>
            </li>
            <li>
              <a href="">Quote your car</a>
            </li>
            <li>
              <a href="">Promotion</a>
            </li>
            <li>
              <a href="">Availability</a>
            </li>
            <li>
              <a href="">Call to line</a>
            </li>
            <li>
              <a href="">Log Out</a>
            </li>
            <li>
              <a href="">Languaje</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
