import axios from "axios";
import React, { useEffect, useState } from "react";
import { Server } from "../../util/url";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Team = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get(Server("/api/v1/doctors"));
        setDoctors(response.data.doctors);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const renderDoctorsList = () => {
    return doctors.map((doc: any) => {
      return (
        <div className="d-flex flex-wrap justify-content-around">
          <Link
            to={`/team/${doc.id}`}
            className="text-reset text-decoration-none text-secondary"
            style={{ color: "#9ab5be", maxWidth: "500px", width: "100%" }}
          >
            <div className="member rounded-3 bg-white m-3 p-3">
              <img
                src={doc.image}
                alt="Team Member"
                style={{
                  objectFit: "cover",
                }}
              />

              <div className="member__right">
                <h4
                  className="text-reset"
                  style={{
                    textAlign: "right",
                    display: "block",
                    marginRight: "25px",
                  }}
                >
                  {doc.fullname}
                </h4>
                <div
                  style={{
                    textAlign: "right",
                    display: "block",
                    marginRight: "25px",
                    color: "#9ab5be",
                  }}
                >
                  {doc.occupation}
                </div>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <main className="container">
      <div className="d-flex flex-wrap justify-content-around">
        {renderDoctorsList()}
      </div>
    </main>
  );
};

export default Team;
