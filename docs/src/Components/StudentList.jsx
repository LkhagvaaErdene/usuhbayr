import { useState, useEffect } from "react";
import axios from "axios";
import "./StudentList.css";

function StudentList() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  // Дэлгэрэнгүй мэдээллийн state
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [detailLoading, setDetailLoading] = useState(false);
  const [detailError, setDetailError] = useState("");

  // Оюутнуудын жагсаалт татах
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setStudents(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Мэдээлэл татахад алдаа гарлаа!");
        setLoading(false);
      });
  }, []);

  // Хайлт хийх
  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.username.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase())
  );

  // Нэг хэрэглэгчийн дэлгэрэнгүй мэдээлэл татах
  const getStudentDetail = (id) => {
    setDetailLoading(true);
    setDetailError("");
    setSelectedStudent(null);

    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        setSelectedStudent(response.data);
        setDetailLoading(false);
      })
      .catch(() => {
        setDetailError("Дэлгэрэнгүй мэдээлэл татахад алдаа гарлаа!");
        setDetailLoading(false);
      });
  };

  // Дэлгэрэнгүй мэдээлэл хаах
  const closeDetail = () => {
    setSelectedStudent(null);
    setDetailError("");
  };

  if (loading) {
    return <h3>Мэдээлэл ачаалж байна...</h3>;
  }

  if (error) {
    return <h3>{error}</h3>;
  }

  return (
    <div className="student-container">
      <h2>Оюутны мэдээллийн жагсаалт</h2>

      <div className="student-summary">
        <span>
          Нийт бүртгэлтэй хэрэглэгч: <strong>{students.length}</strong>
        </span>
        <span>
          Хайлтын үр дүн: <strong>{filteredStudents.length}</strong>
        </span>
      </div>

      <input
        type="text"
        className="student-search"
        placeholder="Нэр, код эсвэл имэйлээр хайх..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="student-table">
        <thead>
          <tr>
            <th>№</th>
            <th>Оюутны нэр</th>
            <th>Оюутны код</th>
            <th>И-мэйл</th>
            <th>Үйлдэл</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student, index) => (
              <tr key={student.id}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{student.username}</td>
                <td>{student.email}</td>
                <td>
                  <button
                    className="detail-button"
                    onClick={() => getStudentDetail(student.id)}
                  >
                    Дэлгэрэнгүй
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Хайлтад тохирох мэдээлэл олдсонгүй.</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Дэлгэрэнгүй мэдээлэл */}
      {detailLoading && <p>Дэлгэрэнгүй мэдээлэл ачаалж байна...</p>}

      {detailError && <p className="error-message">{detailError}</p>}

      {selectedStudent && (
        <div className="student-detail">
          <h3>Хэрэглэгчийн дэлгэрэнгүй мэдээлэл</h3>
          <p>
            <strong>Нэр:</strong> {selectedStudent.name}
          </p>
          <p>
            <strong>Хэрэглэгчийн нэр:</strong> {selectedStudent.username}
          </p>
          <p>
            <strong>И-мэйл:</strong> {selectedStudent.email}
          </p>
          <p>
            <strong>Утас:</strong> {selectedStudent.phone}
          </p>
          <p>
            <strong>Вэб сайт:</strong> {selectedStudent.website}
          </p>
          <p>
            <strong>Байгууллагын нэр:</strong> {selectedStudent.company.name}
          </p>

          <button className="close-button" onClick={closeDetail}>
            Хаах
          </button>
        </div>
      )}
    </div>
  );
}

export default StudentList;