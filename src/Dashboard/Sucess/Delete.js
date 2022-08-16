import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../const/static";

const Delete = () => {
  const { id } = useParams();

  useEffect(() => {
    axios.delete(`${baseUrl}/${id}`).then(res=> console.log(res.status));
  }, []);
  return <div>Deleting {id}</div>;
};

export default Delete;
