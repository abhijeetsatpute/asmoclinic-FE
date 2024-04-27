import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Server } from "../../util/url";
import DoctorDetailsTable from "./DocTable";

const DoctorDetail = () => {
  const { id } = useParams();

  const [doctorData, setDoctorData] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await axios.get(Server(`/api/v1/doctors/${id}`));
        const doctor = response.data.result;
        setDoctorData(doctor);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDoctor();
  }, [id]);

  if (!doctorData) {
    return <div>Loading...</div>;
  }

  const { fullname, occupation, image, info } = doctorData;

  return (
    <main>
      <div className="my-5 container bg-white rounded-5 w-100 d-flex flex-column justify-content-center">
        <div className="team__inner-wrapper py-5 d-inline-block d-xl-flex align-items-center">
          <img
            className="team__img rounded-4 mb-4 mb-xl-0 w-100"
            src={image}
            alt=""
          />
          <div className="team__card ms-0 ms-xl-5 w-100 card p-3 border-0 text-center">
            <h2 className="mb-4 text-center">{fullname}</h2>
            {/* <p className="fs-3 fw-normal mt-3 ms-2 display-5">Главный врач</p> */}
            <hr />
            <p className="fs-3 pt-2 fw-normal ms-2 display-5">{occupation}</p>
          </div>
        </div>
        {doctorData && <DoctorDetailsTable info={info} />}
      </div>
    </main>
  );
};

export default DoctorDetail;
