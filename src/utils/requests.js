import axios from "axios";
export const listItems = async () => {
   try{
      const result = axios.get('http://127.0.0.1:8000/category/')
      return (await result).data
   }catch(error){
      console.log("Error fetching the data: ", error)
   }
};
