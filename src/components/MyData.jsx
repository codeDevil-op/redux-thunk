import React, { useEffect, useState } from "react";
// import 'antd/dist/antd.css'
import { Button, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../redux/dataActions";
const MyData = () => {
  const [tid, setTid] = useState(0);
  const [ttitle, setTtitle] = useState("");
  const [tcontent, setTcontent] = useState("");
  const [tableData, setTableData] = useState([]);
  const { data, isLoading, error } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    const tData = data.slice(0, 15).map((sData) => {
      const { id, title, body } = sData;
      const tableObj = {
        name: title.slice(0, 15),
        id: id,
        body: body.slice(0, 130),
        key: id,
      };
      return tableObj;
    });
    setTableData(tData);
  }, [data]);

  const columns = [
    {
      title: "s/n",
      dataIndex: "id",
      key: "key",
    },
    {
      title: "Title",
      dataIndex: "name",
      key: "key",
    },
    {
      title: "Content",
      dataIndex: "body",
      key: "key",
    },
  ];

  return (
    <>
      {/* <div>
            {isLoading && <h1>Loading...</h1>}
            {error && <h1>{error}</h1>}
            {data.slice(0,15).map((sData)=>{
                console.log(sData)
        const {id,title,body} = sData;
        return(
          <div key={id} className='main-content'>
      <h3>.{id}</h3>
        <h2>{title.slice(0,15).toUpperCase()}...</h2>
        <details>
          <p>{body.slice(0,100)}</p>
        </details>
      </div>
        )
      })}
        </div> */}
      <div>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error}</h1>}
        <Table dataSource={tableData} columns={columns}></Table>
      </div>
    </>
  );
};

export default MyData;
