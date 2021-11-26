import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { Table } from "../../reusables/Table";
import { getAllResourcesThunk } from "../../../redux/dataSlice";

export const Characters = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.authInfo.user);
  const characterData = useSelector((state) => state.data.resources);

  const tableCols = ["", "ID", "Name", "Level", "Class", "Race"];
  const tableData = {
    columns: tableCols,
    type: "characters",
  };

  // Run this request once when the component first renders to request characters
  useEffect(() => {
    // dispatch(
    //   getAllResourcesThunk({
    //     jwt: userData.signInUserSession.idToken.jwtToken,
    //     dataEndpoint: "characters",
    //   })
    // );
    const promise = dispatch(
      getAllResourcesThunk({
        jwt: userData.signInUserSession.idToken.jwtToken,
        dataEndpoint: "characters",
      })
    );
    return () => {
      promise.abort();
    };
  }, [getAllResourcesThunk]);

  // const mockCharData = [
  //   {
  //     id: 1,
  //     name: "Professor Rigby",
  //     level: 15,
  //     class: "Bard",
  //     race: "Tabaxi",
  //   },
  //   {
  //     id: 2,
  //     name: "Tanqueray Togstad",
  //     level: 5,
  //     class: "Rogue",
  //     race: "Halfling",
  //   },
  //   {
  //     id: 3,
  //     name: "Mozzy Peck",
  //     level: 8,
  //     class: "Paladin",
  //     race: "Half-Elf",
  //   },
  // ];

  return (
    <>
      <h2>Characters</h2>
      <Table
        tableStructure={tableData}
        data={characterData}
        resourceType="characters"
      />
    </>
  );
};
