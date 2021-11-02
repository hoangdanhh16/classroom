import { useEffect } from "react";
import { useState } from "react";
import Class from './Class';

function ClassList() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  // Note: the empty deps array [] means
  // this useEffect will run once
  // similar to componentDidMount()
  useEffect(() => {
    fetch("https://danhhoang-classroom-api.herokuapp.com/classes")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
      return (

        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)'}}>
          {items.map((item, index) => {
            return <Class key={index} item={item} />
          })}
        </div>   
    )
  }
}

export default ClassList;