export default function Books({item}) {
    // const {title,author,price} =item;
  return (
    <div  className="book">
      <h4>Book Name : {item.title}</h4>
      <h6>author Name : {item.author}</h6>
      <p>Book Price :{item.price} </p>
    </div>
  );
}
