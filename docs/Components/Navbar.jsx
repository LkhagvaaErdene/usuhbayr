import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">НҮҮР</Link>
      <Link to="/haais">ХААИС</Link>
      <Link to="/udirdah-zuvlul">УДИРДАХ ЗӨВЛӨЛ</Link>
      <Link to="/surgalt">СУРГАЛТ</Link>
      <Link to="/erdem-shinjilgee">ЭРДЭМ ШИНЖИЛГЭЭ, ИННОВАЦ</Link>
      <Link to="/hogjliin-bodlogo">ХӨГЖЛИЙН БОДЛОГО</Link>
      <Link to="/hamtyn-ajillagaa">ХАМТЫН АЖИЛЛАГАА</Link>
      <Link to="/oyutan">ОЮУТАН</Link>
      <Link to="/rektor">РЕКТОРЫН АЖЛЫН АЛБА</Link>
      <Link to="/holboo-barih">ХОЛБОО БАРИХ</Link>
      <Link to="/burtgeh">БҮРТГЭХ</Link>
      <Link to="/student-list">ОЮУТНЫ ЖАГСААЛТ</Link>
    </nav>
  )
}

export default Navbar