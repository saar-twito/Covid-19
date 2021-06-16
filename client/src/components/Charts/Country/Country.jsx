import React from "react";
import CountryDoughnut from "./CountryDoughnut";
import Layout from "../../Layout/Layout";

// * Style
import classes from "../style.module.css";

const Country = ({
  countryName,
  countryNews,
  getUserInput,
  showCountryName,
  showCountryNameFromButton,
}) => {
  return (
    <article className="row p-5 mt-5">
      <Layout>
        <h1 className={classes.header}>Covid-19 in a specific country</h1>
        <p>
          Some countries have managed to deal in different ways in relation to
          each other, some better and some less well.
          <strong> In the next diagram</strong>, you can see different data
          about countries of your choice.
        </p>
      </Layout>

      <Layout>
        <form className={classes.form}>
          <input
            className={classes.countryNameInput}
            type="text"
            value={countryName}
            placeholder="Search by a country name"
            onChange={getUserInput}
          ></input>
          <button
            type="button"
            className={`btn btn-primary ${classes.searchButtonByCountry}`}
            onClick={showCountryName}
          >
            Search
          </button>
        </form>
        <CountryDoughnut
          countryNews={countryNews}
          countryName={showCountryNameFromButton}
        />
      </Layout>
    </article>
  );
};

export default Country;
