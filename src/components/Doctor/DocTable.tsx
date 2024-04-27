import React from "react";
import { isStringObject } from "util/types";

const DoctorInfoTable = ({ info }: any) => {
  const {
    "Personal Information": Personal_Information,
    Education,
    Degree,
    Category,
    Training,
    Publications,
    "Science articles": Science_articles,
    "Language skills": Language_skills,
  } = info;

  const renderObjColumn = (entry: any) => {
    return (
      <React.Fragment>
        {Object.entries(entry).map(([key, value]: any) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value}</td>
          </tr>
        ))}
      </React.Fragment>
    );
  };

  const renderArrColumn = (entry: any) => {
    return (
      <React.Fragment>
        <tr>
          <td>{}</td>
          <td>{entry}</td>
        </tr>
      </React.Fragment>
    );
  };

  const renderTable = () => {
    return (
      <div>
        <table className="table table-striped mb-5 border">
          <tbody>
            {Personal_Information && (
              <>
                <tr>
                  <td colSpan={2}>
                    <strong>{"Personal Information"}</strong>
                  </td>
                </tr>
                {Personal_Information.map((e: any, index: number) => (
                  <React.Fragment key={index}>
                    {renderObjColumn(e)}
                  </React.Fragment>
                ))}
              </>
            )}
            {Education && (
              <>
                <tr>
                  <td colSpan={2}>
                    <strong>{"Education"}</strong>
                  </td>
                </tr>
                {Education.map((e: any, index: number) => (
                  <React.Fragment key={index}>
                    {renderObjColumn(e)}
                  </React.Fragment>
                ))}
              </>
            )}
            {Degree && (
              <>
                <tr>
                  <td colSpan={2}>
                    <strong>{"Degree"}</strong>
                  </td>
                </tr>
                {Degree.map((e: any, index: number) => (
                  <React.Fragment key={index}>
                    {renderObjColumn(e)}
                  </React.Fragment>
                ))}
              </>
            )}
            {Category && (
              <>
                <tr>
                  <td colSpan={2}>
                    <strong>{"Category"}</strong>
                  </td>
                </tr>
                {Category.map((e: any, index: number) => (
                  <React.Fragment key={index}>
                    {renderArrColumn(e)}
                  </React.Fragment>
                ))}
              </>
            )}
            {Training && (
              <>
                <tr>
                  <td colSpan={2}>
                    <strong>{"Training"}</strong>
                  </td>
                </tr>
                {Training.map((e: any, index: number) => (
                  <React.Fragment key={index}>
                    {renderObjColumn(e)}
                  </React.Fragment>
                ))}
              </>
            )}
            {Publications && (
              <>
                <tr>
                  <td colSpan={2}>
                    <strong>{"Publications"}</strong>
                  </td>
                </tr>
                {Publications.map((e: any, index: number) => (
                  <React.Fragment key={index}>
                    {renderArrColumn(e)}
                  </React.Fragment>
                ))}
              </>
            )}
            {Science_articles && (
              <>
                <tr>
                  <td colSpan={2}>
                    <strong>{"Science articles"}</strong>
                  </td>
                </tr>
                {Science_articles.map((e: any, index: number) => (
                  <React.Fragment key={index}>
                    {renderArrColumn(e)}
                  </React.Fragment>
                ))}
              </>
            )}
            {Language_skills && (
              <>
                <tr>
                  <td colSpan={2}>
                    <strong>{"Language skills"}</strong>
                  </td>
                </tr>
                {Language_skills.map((e: any, index: number) => (
                  <React.Fragment key={index}>
                    {renderArrColumn(e)}
                  </React.Fragment>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return renderTable();
};

export default DoctorInfoTable;
