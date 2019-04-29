import React, { Component, Fragment } from "react";
import { fetchRepos } from "../api";
import { CssBaseline } from "@material-ui/core";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import MainContent from "./MainContent";
import RepoList from "./RepoList";
import Loading from "./Loading";
import Error from "./Error";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      repos: [],
      languages: ["javascript", "python", "php"],
      selected: "javascript",
      isLoading: false,
      error: null
    };
  }

  componentDidMount = () => {
    this.setState({ isLoading: true });

    fetchRepos("javascript")
      .then(repos => this.setState({ repos, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  };

  componentDidUpdate = async (prevProps, prevState) => {
    const { selected } = this.state;

    if (prevState.selected !== selected) {
      this.setState({ isLoading: true });

      fetchRepos(selected)
        .then(repos => this.setState({ repos, isLoading: false }))
        .catch(error => this.setState({ error, isLoading: false }));
    }
  };

  handleChange = (event, value) => {
    this.setState({
      selected: value
    });
  };

  render() {
    const { repos, languages, selected, isLoading, error } = this.state;

    return (
      <Fragment>
        <CssBaseline />
        <Header />
        <Navigation
          handleChange={this.handleChange}
          selected={selected}
          languages={languages}
        />
        <MainContent>
          {isLoading ? (
            <Loading />
          ) : error ? (
            <Error error={error.message} />
          ) : (
            <RepoList repos={repos} />
          )}
        </MainContent>
        {!isLoading && <Footer />}
      </Fragment>
    );
  }
}

export default App;
