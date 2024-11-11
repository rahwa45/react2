import Card from './Card';



  const CardList = ({data}) => {
    return (
      <div className="card-list">
        {data.map((card, index) => (
          <Card key={index} image={card.image} title={card.title} description={card.description} />
        ))}
      </div>
    );
  };
  
export default CardList;
 
 

  



