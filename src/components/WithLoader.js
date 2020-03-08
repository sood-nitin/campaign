import React from "react";
function WithLoader(Component) {
  return function WithLoaderComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <p>Loading...</p>;
  };
}
export default WithLoader;
