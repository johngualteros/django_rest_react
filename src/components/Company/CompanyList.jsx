import { useState,useEffect } from "react";
import * as CompanyServer from '../Company/CompanyServer'
import CompanyItem from "./CompanyItem";
const CompanyList = () => {
  const [companies,setCompanies]=useState([]);
  const listCompanies =async()=>{
    try{
      const res=await CompanyServer.listCompanies();
      const data=await res.json();
      setCompanies(data.companies);
    }catch(error){
      console.log(error);
    }
  }
  
  useEffect(()=>{
    listCompanies();
  },[])
  // The return in the DOM
  return(
    <>
    <div className="container py-5 px-2">
      <div className="row gap-3">
      {
      companies.map(company=>(
        <CompanyItem company={company} listCompanies={listCompanies} key={company.id}/>
      ))
      }
      </div>
    </div>
    </>
  );
};
export default CompanyList;
