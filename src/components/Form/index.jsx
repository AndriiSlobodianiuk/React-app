import React from 'react';
import { connect } from 'react-redux';
import { getMoviesList, getMovieBySearch } from './action';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

import './Form.css';

const styles = {
  searchInput: {
    color: 'white'
  },

  select: {
    color: 'white',
    width: '300px'
  },

  btn: {
    marginLeft: '10px'
  },

  selectPlaceholder: {
    color: 'white'
  }
};

class Form extends React.Component {
  state = {
    selectedOption: '',
    searchValue: ''
  };

  handleSelectChange = e => {
    this.setState({
      selectedOption: e.target.value
    });

    this.props.getMoviesList(e.target.value);
  };

  handleSearchValue = e => {
    this.setState({
      searchValue: e.target.value
    });
  };

  getSearchMovies = e => {
    e.preventDefault();

    if (this.state.searchValue === '') {
      return false;
    }

    this.props.getMovieBySearch(this.state.searchValue);
  };

  render() {
    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="subtitle2" color="inherit">
            <form onSubmit={this.getSearchMovies} action="#" className="form">
              <div className="select-container">
                <Select
                  value={this.state.selectedOption}
                  onChange={this.handleSelectChange}
                  className="select"
                  style={styles.select}
                >
                  <MenuItem value="top_rated" name="Top rated">
                    Top rated
                  </MenuItem>
                  <MenuItem value="upcoming" name="Upcoming">
                    Upcoming
                  </MenuItem>
                  <MenuItem value="popular" name="Popular">
                    Popular
                  </MenuItem>
                </Select>
                <FormHelperText style={styles.selectPlaceholder}>
                  Search by category
                </FormHelperText>
              </div>

              <div className="search-input__container">
                <Input
                  placeholder="Search by title"
                  value={this.searchValue}
                  onChange={this.handleSearchValue}
                  style={styles.searchInput}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  style={styles.btn}
                >
                  Search
                  <SearchIcon className="search_btn__icon" />
                </Button>
              </div>
            </form>
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

const mapDispatchToProps = { getMoviesList, getMovieBySearch };

export default connect(
  null,
  mapDispatchToProps
)(Form);
