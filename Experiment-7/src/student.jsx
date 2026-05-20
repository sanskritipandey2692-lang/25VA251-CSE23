function Student(props) {
  return (
    <div style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px",
      display: "inline-block"
    }}>
      <h3>{props.name}</h3>
      <p>Course: {props.course}</p>
      <p>Marks: {props.marks}</p>
    </div>
  );
}

export default Student;