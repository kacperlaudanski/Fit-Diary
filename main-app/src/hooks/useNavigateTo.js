import { useNavigate } from "react-router-dom";

export function useNavigateTo(page){
   const navigate = useNavigate();    
   return navigate("/"+page); 
}

