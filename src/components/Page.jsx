import Paragraph from './Paragraph';

function Page({ data }) {
  return (
    <div className="page">
      {data.map((text, index) => (
        <Paragraph index={index} text={text} />
      ))}
    </div>
  );
};

export default Page;