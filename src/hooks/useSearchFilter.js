import  { useEffect, useState } from "react";
import { resolve } from "../libs/utils";

const useSearchFilter = (data, params) => {
  const [value, setValue] = useState("");
  const [filteredData, setFilteredData] = useState([...data]);

  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  useEffect(() => {
    let updatedData = data.filter((el) =>
      [...params].some((el2) =>
        resolve(el2, el).toLowerCase().includes(value.toLowerCase())
      )
    );
    setFilteredData(updatedData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return [value, setValue, filteredData];
};

export default useSearchFilter;
