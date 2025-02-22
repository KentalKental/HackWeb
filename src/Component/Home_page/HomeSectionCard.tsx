import Card from 'react-bootstrap/Card';

function SectionCard({image_src, title, text}) {
  return (
    <Card style={{ maxWidth: "22rem" }} className="rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
      <Card.Img variant="top" src={image_src} />
      <Card.Body className="px-6 py-4">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SectionCard;