import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import MovieCard from '../MovieCard';
import React from 'react';
import classes from './MoviesList.css';
import classNames from 'classnames/bind';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { getMoviesData } from './selector';

const cx = classNames.bind(classes);

const MoviesList = ({ moviesData }) => {
  const listClasses = cx({
    list: moviesData.movies.length ? true : false
  });

  return moviesData.loading ? (
    <div className="loader-position">
      <Loader type="Oval" color="#00BFFF" height="100" width="100" />
    </div>
  ) : (
    moviesData &&
      moviesData.movies &&
      !!moviesData.movies.length && (
        <ul className={listClasses}>
          {moviesData.movies.map(el => (
            <MovieCard movie={el} key={uuidv4()} />
          ))}
        </ul>
      )
  );
};

MoviesList.defaultProps = {
  moviesData: {}
};

MoviesList.propTypes = {
  moviesData: PropTypes.object
};

const mapStateToProps = state => ({
  moviesData: getMoviesData(state)
});

export default connect(
  mapStateToProps,
  null
)(MoviesList);
