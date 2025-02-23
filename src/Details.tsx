import React, { CSSProperties } from "react";
import { useLocation } from "react-router-dom";

interface QRData {
  authorName: string;
  description: string;
  image: string;
}

const Details: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const data: QRData = {
    authorName: queryParams.get("authorName") || "Unknown Author",
    description: queryParams.get("description") || "No description available.",
    image: queryParams.get("image") || "",
  };

  const styles: { container: CSSProperties; image: CSSProperties } = {
    container: {
      textAlign: "center",
      padding: "20px",
      maxWidth: "600px",
      margin: "0 auto",
      border: "1px solid #ccc",
      borderRadius: "8px",
    },
    image: {
      maxWidth: "100%",
      height: "auto",
    },
  };

  return (
    <div style={styles.container}>
      <h1>{data.authorName}</h1>
      <p>{data.description}</p>
      {data.image && (
        <img src={data.image} alt="Painting" style={styles.image} />
      )}
    </div>
  );
};

export default Details;
