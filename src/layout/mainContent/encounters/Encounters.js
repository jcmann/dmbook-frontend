import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Table } from "../../reusables/Table";
import { getAllResourcesThunk } from "../../../redux/dataSlice";

export const Encounters = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);
  const characterData = useSelector((state) => state.data.resources);

  const tableCols = ["", "Title", "Difficulty", "Description"];
  const tableData = {
    columns: tableCols,
    type: "encounters",
  };

  // Run this request once when the component first renders to request characters
  useEffect(() => {
    const promise = dispatch(
      getAllResourcesThunk({
        jwt: userData.signInUserSession.idToken.jwtToken,
        dataEndpoint: "encounters",
      })
    );
    return () => {
      promise.abort();
    };
  }, [getAllResourcesThunk]);

  return (
    <>
      <h2>Encounters</h2>
      <Table
        tableStructure={tableData}
        data={characterData}
        resourceType="encounters"
      />
    </>
  );
};
