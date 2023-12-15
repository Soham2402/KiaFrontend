import axios from "./axiosConfig";

export const listCategories = async () => {
   try {
      const result = await axios.get('/category/');
      return result.data;
   } catch (error) {
      console.error("Error fetching the data: ", error);
      throw error;
   }
};

export const listCategoryItem = async (id) => {
   try {
      const result = await axios.get(`/category/${id}`);
      return result.data;
   } catch (error) {
      console.error("Error fetching the data: ", error);
      throw error;
   }
};


export const getSingleItem = async (id) => {
   try {
      const result = await axios.get(`/inventory/${id}`);
      return result.data;
   } catch (error) {
      console.error("Error fetching the data: ", error);
      throw error;
   }
};

export const getItem = async()=>{
   try{
      const result = await axios.get('/inventory/')
      return result.data
   }catch(error){
      console.log("There was an error ",error)
      throw error
   }
}