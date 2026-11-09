import NewsCard from "../components/NewsCard"

function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <h2>ХӨДӨӨ АЖ АХУЙН ИХ СУРГУУЛЬ</h2>
          <p>
            Мэдлэг, шинжлэх ухаан, инновацид суурилсан
            дээд боловсролын байгууллага
          </p>
          <button>Дэлгэрэнгүй</button>
        </div>
      </section>

      {/* ЧУХАЛ ХОЛБООС */}
      <section className="important">
        <div className="important-image">
          <img src="/medee.jpg" alt="ХААИС-ийн зураг" />
        </div>

        <div className="important-content">
          <h2>ЧУХАЛ ХОЛБООС</h2>

          <div className="link-cards">
            <a
              href="https://shilendans.gov.mn/organization/30156?ry=2026&group=5"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">📋</span>
              <span>Шилэн данс</span>
            </a>

            <a
              href="https://www1.unicus.mn/nar/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">💰</span>
              <span>Санхүү бүртгэлийн програм</span>
            </a>

            <a
              href="https://lms.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">📚</span>
              <span>Сургалтын албаны вэб</span>
            </a>

            <a
              href="https://teacher.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">👩‍🏫</span>
              <span>Багшийн вэб</span>
            </a>

            <a
              href="https://lce.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">⭐</span>
              <span>Багшийн хөгжил программ</span>
            </a>

            <a
              href="https://student.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">🎓</span>
              <span>Оюутны вэб</span>
            </a>

            <a
              href="https://elselt.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">📝</span>
              <span>Элсэлтийн вэб</span>
            </a>

            <a
              href="https://finance.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">💳</span>
              <span>Оюутны төлбөрийн мэдээлэл</span>
            </a>

            <a
              href="https://mail.google.com/a/muls.edu.mn"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">✉️</span>
              <span>Электрон шуудан</span>
            </a>

            <a
              href="https://library.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">📖</span>
              <span>Номын сан вэб</span>
            </a>

            <a
              href="http://catalog.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">🔍</span>
              <span>Номын сангийн электрон каталог</span>
            </a>

            <a
              href="http://map.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">🗺️</span>
              <span>Төв байр план зураг</span>
            </a>

            <a
              href="https://sites.google.com/muls.edu.mn/feedback-muls-edu-mn/home"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">📌</span>
              <span>Санал хүсэлт илгээх</span>
            </a>

            <a
              href="https://www.muls.edu.mn/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="link-icon">🌐</span>
              <span>ХААИС-ийн үндсэн вэб</span>
            </a>
          </div>
        </div>
      </section>

      {/* СҮҮЛИЙН МЭДЭЭ */}
      <section className="news">
        <h2>СҮҮЛИЙН МЭДЭЭ</h2>

        <div className="news-list">
          <NewsCard
            title="ХААИС-ийн шинэ мэдээлэл"
            description="Хөдөө аж ахуйн их сургуулийн үйл ажиллагаа, шинэ мэдээ мэдээлэл."
            date="2026.09.06"
          />
          <NewsCard
            title="Сургалт, эрдэм шинжилгээний үйл ажиллагаа"
            description="Сургалт болон эрдэм шинжилгээний үйл ажиллагааны талаарх мэдээлэл."
            date="2026.09.05"
          />
          <NewsCard
            title="Оюутны үйл ажиллагаа"
            description="Оюутнуудад зориулсан үйл ажиллагаа, арга хэмжээний мэдээлэл."
            date="2026.09.04"
          />
        </div>
      </section>
    </main>
  )
}

export default Home