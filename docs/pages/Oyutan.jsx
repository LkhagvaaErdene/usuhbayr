import "./Page.css"

function Oyutan() {
  return (
    <main className="page">
      <section className="page-intro">
        <h1>Оюутан</h1>

        <p>
          ХААИС-ийн оюутнууд сургалт, эрдэм шинжилгээ, спортын болон соёлын
          үйл ажиллагаанд идэвхтэй оролцож, олон улсын болон дотоодын
          тэтгэлэгт хөтөлбөрт хамрагдах боломжтой.
        </p>

        <h2>Оюутны үйлчилгээ</h2>
        <ul>
          <li>
            <a href="https://student.muls.edu.mn/" target="_blank" rel="noreferrer">
              Оюутны вэб
            </a>
          </li>
          <li>
            <a href="https://finance.muls.edu.mn/" target="_blank" rel="noreferrer">
              Оюутны төлбөрийн мэдээлэл
            </a>
          </li>
          <li>
            <a href="https://lms.muls.edu.mn/" target="_blank" rel="noreferrer">
              Сургалтын албаны вэб (LMS)
            </a>
          </li>
          <li>
            <a href="https://library.muls.edu.mn/" target="_blank" rel="noreferrer">
              Номын сан
            </a>
          </li>
        </ul>

        <h2>Тэтгэлэг, хөтөлбөр</h2>
        <p>
          ERASMUS+, хос хөтөлбөр, дотоодын тэтгэлэг, олимпиад, эрдэм
          шинжилгээний хурал зэрэг олон боломж нээлттэй.
        </p>

        <p>
          Дэлгэрэнгүй:{" "}
          <a
            href="https://muls.edu.mn/view.php?value=ZW5jb2RldXNlcmlkNw=="
            target="_blank"
            rel="noreferrer"
          >
            muls.edu.mn – Оюутан
          </a>
        </p>
      </section>
    </main>
  )
}

export default Oyutan