import { useState, useEffect } from "react";
import ProfAndCovEdit from "../../components/DoctorComponents/EditProfile/ProfAndCovEdit";
import st from "./Profile.module.css";
import getData from "../../functions/getData";
import EditForm from "../../components/DoctorComponents/EditProfile/EditForm";

import { CircularProgress } from "@mui/material";

export default function EditProfile() {
  const [data, setData] = useState({});

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem("token") == null) {
      window.location.pathname = "/signup";
    } else {
      try {
        getData(window.localStorage.getItem("token")).then((res) => {
          console.log("Data LOG", res.data);
          setData(res.data.doctor);
          setLoading(false);
        });
      } catch (err) {
        console.log("request", err);
      }
    }
  }, []);

  return (
    <div>
      {isLoading && (
        <div className={st.loading}>
          <CircularProgress />
        </div>
      )}
      {!isLoading && (
        <div className={st.container}>
          <ProfAndCovEdit data={data} />
          <EditForm data={data} />
        </div>
      )}
    </div>
  );
}