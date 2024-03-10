import Link from "next/link";

const Header = () => {
  return (
    <nav className="header">
      <h2>Header</h2>
      <div className="links">
        <div className="btnITem">
          <Link className="btnLink" href='/speaker'>Speakers</Link>
        </div>
        <div className="btnITem">
          <Link className="btnLink" href='/schedule'>Schedule</Link>
        </div>
        <div className="btnITem">
          <Link className="btnLink" href='/about'>About Us</Link>
        </div>
        <div className="btnITem">
          <Link className="btnLink" href='/'>Home</Link>
        </div>
      </div>
    </nav>
  )
}

export default Header