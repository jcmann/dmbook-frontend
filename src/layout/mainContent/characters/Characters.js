import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Table } from "../../reusables/Table";
import { initDatasetThunk } from "../../../redux/dataSlice";

export const Characters = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);
  const allData = useSelector((state) => state.data.characters);

  const tableCols = [
    "",
    "ID",
    "Name",
    "Level",
    "Class",
    "Race",
    "Str",
    "Dex",
    "Con",
    "Int",
    "Wis",
    "Cha",
  ];
  const tableData = {
    columns: tableCols,
    type: "characters",
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
      <h2>Characters</h2>
      <Table
        tableStructure={tableData}
        data={allData}
        resourceType="characters"
      />
    </>
  );
};
