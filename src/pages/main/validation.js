import React , {useState}from "react";
import Homepage from "./homepage";
import { useQuery } from "@tanstack/react-query";
import { getOrders } from '../../services/getOrders/index'

function Home (){
        //     const { data } = useQuery(['orders'], async()=>await getOrders(300));
        // console.log(data);

      const [user,setUser] = useState({customerId:""});
      const [error,setError]=useState("");
      function Valid (details) {
        if(details == 300){
          console.log("logged in");
        }else{
          setError("Invalid Customer ID!!")
        }
      }

    return(
        <Homepage  Valid={Valid} error={error}/>

    )

}

export default Home;