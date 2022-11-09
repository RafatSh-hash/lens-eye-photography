import { useEffect } from "react";

//setting dynamic Title Hook
const useTitle = (title) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
export default useTitle;
