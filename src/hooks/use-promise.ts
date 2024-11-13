import { useEffect, useState } from "react";

function usePromise(asyncFn: any, params?: any) {
  const [data, setData] = useState();

  useEffect(() => {

    async function init() {
      console.log(asyncFn)
      try {
        const result = await asyncFn?.(...params);
        setData(result);
      } catch (err) {
        console.error(err)
      }
    }

    init();

  }, []);

  return data;
}

export default usePromise;