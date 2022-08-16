import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../const/static";
import SpinFC from "antd/lib/spin";
import { Result , Button} from "antd";
import { useNavigate } from "react-router-dom";

const Delete = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();

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
      {loading ? (
        <SpinFC size="large" />
      ) : (
        <Result
          status="info"
          title="Successfully Deleted!"
          extra={[
            <Button type="primary" key="console" onClick={()=> navigate(`../`, { replace: true })}>
              Go Console
            </Button>
            
          ]}
        />
      )}
    </div>
  );
};

export default Delete;
