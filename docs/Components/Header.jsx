function Header() {
  const universityName = "ХӨДӨӨ АЖ АХУЙН ИХ СУРГУУЛЬ"
  const englishName = "MONGOLIAN UNIVERSITY OF LIFE SCIENCES"

  return (
    <header className="header">
      <div className="logo-section">
        <img
          src="/logo_muls.png"
          alt="ХААИС лого"
          className="muls-logo"
        />
        <div className="university-title">
          <h1>{universityName}</h1>
          <p>{englishName}</p>
        </div>
      </div>

      <div className="top-links">
        <a href="#">ЭЛСЭЛТИЙН БҮРТГЭЛ</a>
        <a href="#">БҮТЭЦ БҮРЭЛДЭХҮҮН</a>
        <a href="#">ТӨГСӨГЧИД</a>
      </div>
    </header>
  )
}

export default Header