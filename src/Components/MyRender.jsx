import React from "react";

const MyRender = ({ num }) => {
  // if (num > 0)
  //   return (
  //     <div>
  //       <h2>More 0 - {num}</h2>
  //     </div>
  //   );
  // return (
  //   <div>
  //     <h2>Less 0 OR equal 0 - {num}</h2>
  //   </div>
  // );

  // return num > 0 ? <h2>More 0 - {num}</h2> : <h2>Less 0 OR equal 0</h2>;

  return <> {num > 0 && <h2>More 0 - {num}</h2>}</>;
};

export default MyRender;
