import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../const/static";
import SpinFC from "antd/lib/spin";

const Delete = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.delete(`${baseUrl}/${id}`).then((res) => {
      if (res.status == 200) {
        setLoading(false);
      }
    });
  }, []);
  return (
    <div>
      Deleting {id}
      {loading ? <SpinFC size="large" /> : <React.Fragment />}
    </div>
  );
};

export default Delete;
