import { useEffect } from "react";
import { useState } from "react";
import Page from './Page';

function LoremIpsumContainer() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://baconipsum.com/api/?type=meat-and-filler&paras=20&start-with-lorem=1')
      .then(response => response.json())
      .then(result => {
        setData(result);
      })
  }, []);
  
  return <Page data={data} />;
};

export default LoremIpsumContainer;
