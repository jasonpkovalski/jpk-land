import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const NotFound = () => {

  return (
    <Layout>
      <div className="flex flex-row items-center justify-center">
        <p className="text-lg text-slate-200">
          You visited a non-existent path. Go back <Link
            to="/"
            className="text-lg font-semibold text-indigo-400 hover:text-indigo-200 ease-in-out duration-700"
          >home</Link> 🏠
        </p>
      </div>
    </Layout>
  );
};

export default NotFound;