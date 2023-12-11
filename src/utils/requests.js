import axios from "axios";
export const listItems = async () => {
   try{
      const result = axios.get('http://43.204.215.129:5000/category/')
      return (await result).data
   }catch(error){
      console.log("Error fetching the data: ", error)
   }
};
