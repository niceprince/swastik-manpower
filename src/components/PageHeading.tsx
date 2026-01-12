import React from "react";

const PageHeading: React.FC<{ pageTitle: string }> = ({ pageTitle }) => {
  return (
    <section>
      <div className="container mt-10">
        <h1>{pageTitle}</h1>
      </div>
    </section>
  );
};

export default PageHeading;
