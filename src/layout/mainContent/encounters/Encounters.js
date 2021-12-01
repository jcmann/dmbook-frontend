import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Table } from "../../reusables/Table";
import { initDatasetThunk } from "../../../redux/dataSlice";

export const Encounters = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);
  const encountersData = useSelector((state) => state.data.encounters);

  const tableCols = ["", "ID", "Title", "Difficulty", "Description"];
  const tableData = {
    columns: tableCols,
    type: "encounters",
  };

  // Run this request once when the component first renders to request characters
  useEffect(async () => {
    const promise = await dispatch(
      initDatasetThunk({
        jwt: userData.signInUserSession.idToken.jwtToken,
      })
    );
    return () => {
      promise.abort();
    };
  }, [initDatasetThunk]);

  return (
    <>
      <h2>Encounters</h2>
      <Table
        tableStructure={tableData}
        data={encountersData}
        resourceType="encounters"
      />
    </>
  );
};
