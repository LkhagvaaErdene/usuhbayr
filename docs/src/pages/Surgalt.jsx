import "./Surgalt.css"

function Surgalt() {
  return (
    <main className="surgalt-page">
      {/* СУРГАЛТЫН ТУХАЙ ҮНДСЭН МЭДЭЭЛЭЛ */}
      <section className="surgalt-intro">
        <h1>Сургалт</h1>

        <p>
          ХААИС нь 100 гаруй жилийн түүхтэй Малын эмч, Зоотехникч мэргэжилтэн
          бэлтгэх түүхэн замналынхаа анхны хуудсыг нээж байсан бол өнөөдөр
          бүрэлдэхүүний <strong>6 сургууль</strong>, орон нутгийн салбар
          <strong> 2 сургууль</strong>, политехникийн <strong>3 коллеж</strong>,
          харьяа ахлах сургуультай болж сургалт-эрдэм шинжилгээ, үйлдвэрлэлийн
          гурвалсан холбоо бүхий шаталсан сургалт явуулдаг, үндэсний хэмжээнд
          тэргүүлэх, ууган их сургуулиудын нэг болжээ.
        </p>

        <p>
          Сургалт эрхэлсэн нэгж нь Сургалтын бодлого, зохицуулалтын газар,
          Багш, оюутны хөгжлийн газрын <strong>бүтэц, бүрэлдэхүүнтэйгээр</strong>
          суралцагч, профессор, багш, хөтөлбөрт оролцогч талуудад үндсэн чиг
          үүргийн хүрээнд бүх талын үйлчилгээ үзүүлэн,
          <em> элсэлт-сургалт-судалгаа-төгсөлтийн</em> үйл ажиллагааг зохион
          байгуулж, сургалттай холбоо бүхий хууль, эрх зүйн баримт бичиг,
          журмын хэрэгжилтийг хянан зохицуулж, холбогдох журмын шинэчлэлт,
          өөрчлөлтийг удирдлагаар ханган ажиллаж байна.
        </p>
      </section>

      {/* СУРГАЛТЫН ХӨТӨЛБӨРҮҮД */}
      <section className="training-list">
        <h2>Сургалтын хөтөлбөрүүд</h2>

        <div className="training-grid">
          {/* 1. Бакалаврын сургалт */}
          <a
            className="training-card"
            href="https://muls.edu.mn/program_sum.php?page_value=ZW5jb2RldXNlcm5hbWU="
            target="_blank"
            rel="noreferrer"
          >
            <img src="/doctor.jpg" alt="Бакалаврын сургалт" />
            <div className="training-overlay">
              <h3>Бакалаврын сургалт</h3>
            </div>
          </a>

          {/* 2. Магистр, Докторын сургалт */}
          <a
            className="training-card"
            href="https://muls.edu.mn/view.php?page_value=ZW5jb2RldXNlcm5hbWU="
            target="_blank"
            rel="noreferrer"
          >
            <img src="/magister_web_600.jpg" alt="Магистр, Докторын сургалт" />
            <div className="training-overlay">
              <h3>Магистр, Докторын сургалт</h3>
            </div>
          </a>
        </div>
      </section>
    </main>
  )
}

export default Surgalt