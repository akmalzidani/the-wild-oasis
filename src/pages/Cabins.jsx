import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cabins, setCabins] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const cabins = await getCabins();
        setCabins(cabins);
      } catch (error) {
        console.error("Error fetching cabins:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      {!cabins.length ? (
        <p>No cabins found</p>
      ) : (
        cabins.map((cabin) => (
          <p key={cabin.id}>
            {cabin.name}|{cabin.regularPrice}|(Discount: {cabin.discount}) (Max
            capacity: {cabin.maxCapacity})
          </p>
        ))
      )}
      <p>{cabins.length} cabins found</p>
    </Row>
  );
}

export default Cabins;
