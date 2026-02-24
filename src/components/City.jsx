import { useParams } from "react-router-dom";

function City() {
  const { id } = useParams();

  return <div>{id}</div>;
}

export default City;
