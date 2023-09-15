import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";


const ReportDetail = () => {
  const { id } = useParams();

  const allReports = useSelector((state) => state.allReports);
  const reportDetail = allReports.find((report) => report.id == id);

  const isHorizontalImage =
    reportDetail &&
    reportDetail.imagen &&
    reportDetail.imagen.width > reportDetail.imagen.height;

  return (
    <div className={styles["report-detail-container"]}>
      {reportDetail ? (
        <div className={styles["report-detail"]}>
          <Link to="/home">Go Back to Home</Link>
          <h1>{reportDetail.nombre}</h1>
          <p>{`Id: ${reportDetail.id}`}</p>
          <p>{`Name: ${reportDetail.nombre}`}</p>
          <p>{`Description: ${reportDetail.description}`}</p>
          <p>{`Court_Order: ${reportDetail.court_order}`}</p>
          <p>{`Status: ${reportDetail.status}`}</p>
          <p>{`Date: ${reportDetail.date}`}</p>
          <p>{`Location: ${reportDetail.location}`}</p>
          <img
            className={`${styles["report-detail-img"]} ${
              isHorizontalImage
                ? styles["horizontal-img"]
                : styles["vertical-img"]
            }`}
            src={reportDetail.imagen}
            alt={reportDetail.nombre}
          />
        </div>
      ) : null}
    </div>
  );
};

export default ReportDetail;


