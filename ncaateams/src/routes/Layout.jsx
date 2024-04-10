import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  const titlecss = {backgroundColor: "#EEE5E9", 
                  color: "black", 
                  width:"100%", 
                  minHeight: "20vh",
                  display: "flex",
                  placeItems: "center",
                  justifyContent: "center",
                  margin: "0",
                  fontFamily: "Just Another Hand",
                  };
    
  const linkcss = {textDecoration: "none", color: "black"};
  return (
    <>
      <div className="title-banner" style={titlecss}>
        <h1>NCAA DREAM TEAM MAKER</h1>
      </div>
      <nav style={{backgroundColor: "#CF5C36", margin: "0", fontFamily: "Just Another Hand", fontSize: "32px"}}>
        <ul style={{listStyle: "none", display: "flex", justifyContent: "center"}}>
        <li style={{padding: "10px"}}>
            <Link to="/TeamGallery" style={linkcss}>Team Gallery</Link>
          </li>
          <li style={{padding: "10px"}}>
            <Link to="/" style={linkcss}>Home</Link>
          </li>
          <li style={{padding: "10px"}}>
            <Link to="/CreateTeam" style={linkcss}>Create a Team</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;