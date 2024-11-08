function Paragraph({ index, text }) {
  return (
    <div className="paragraph">
      <h2>{index + 1}</h2>
      <p>{text}</p>
    </div>
  );
};

export default Paragraph;