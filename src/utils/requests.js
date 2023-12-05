import axios from "axios";
export const listItems = async () => {
   const result = await axios.get("http://127.0.0.1:8000/inventory/")
   return result.data
};
