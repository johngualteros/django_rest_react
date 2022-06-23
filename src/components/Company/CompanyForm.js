import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as CompanyServer from "../Company/CompanyServer";
const CompanyForm = () => {
  const navigate = useNavigate();
  const params = useParams();

  console.log(params);
  const initialState = {
    id: 0,
    name: "",
    foundation: "",
    website: "",
  };
  const [company, setCompany] = useState(initialState);

  const handleInputChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res;
      if (!params.id) {
        res = await CompanyServer.registerCompany(company);
        const data = await res.json();
        if (data.message === "success") {
          setCompany(initialState);
        }
      } else {
        await CompanyServer.updateCompany(params.id, company);
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const getCompany = async (id) => {
    try {
      let res;
      res = await CompanyServer.getCompany(id);
      const data = await res.json();
      const { name, foundation, website } = data.company;
      setCompany({ id, name, foundation, website });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params.id) {
      getCompany(params.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container py-5">
      <h1 className="text-center">Company</h1>
      <div className="col-md-6 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              minLength={3}
              maxLength={50}
              value={company.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="foundation" className="form-label">
              Foundation
            </label>
            <input
              type="number"
              className="form-control"
              id="foundation"
              name="foundation"
              placeholder="Foundation"
              min={1900}
              max={2022}
              value={company.foundation}
              onChange={handleInputChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="website" className="form-label">
              Website
            </label>
            <input
              type="url"
              className="form-control"
              id="website"
              name="website"
              placeholder="Enter Website"
              maxLength={100}
              value={company.website}
              onChange={handleInputChange}
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary rounded btn-block">
              {params.id ? "Update Company" : "Add Company"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CompanyForm;
