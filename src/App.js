import React from "react";
import { fetchData, fetchDailyData } from "./api";
import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import coronaImage from "./images/coronaImage.png";



class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
    console.log(this.state.country);
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={coronaImage} alt="COVID-19" />
        <Cards data={data}></Cards>
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
        ></CountryPicker>
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
