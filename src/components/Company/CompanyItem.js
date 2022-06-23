import * as CompanyServer from "../Company/CompanyServer";
import { useNavigate } from "react-router-dom";

const CompanyItem = ({ company, listCompanies }) => {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    await CompanyServer.deleteCompany(id);
    listCompanies();
  };
  return (
    <div
      className="card card-body col-md-3 gap-2 rounded shadow-lg bg-info bg-opacity-50"
      key={company.id}
    >
      <div className="card-title d-flex justify-content-space-between">
        <h1>
          {company.name}
          <button
            onClick={() =>
              company.id && navigate(`/updateCompany/${company.id}`)
            }
            className="ms-2 btn btn-info btn-sm"
          >
            Edit
          </button>
        </h1>
      </div>
      <div className="card-text">
        <p>
          Foundation: <strong>{company.foundation}</strong>
        </p>
      </div>
      <a
        href={company.website}
        className="btn btn-primary text-light fw-bold btn-sm rounded mb-2 py-2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go To Website
      </a>
      <button
        onClick={() => company.id && handleDelete(company.id)}
        className="btn btn-danger my-2"
      >
        Delete Company
      </button>
    </div>
  );
};
export default CompanyItem;
