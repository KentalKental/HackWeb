import Card from 'react-bootstrap/Card';

function SectionCard({image_src, title, text}) {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src={image_src} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SectionCard;