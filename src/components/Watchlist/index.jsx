import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import React from 'react';
import WatchCard from '../WatchCard';
import './Watchlist.css';
import { connect } from 'react-redux';
import { addMovieToWatchlist } from '../MovieCard/action';
import { getWatchList } from './selector';

class WatchList extends React.Component {
  state = {};

  componentDidMount() {
    const watchList = JSON.parse(localStorage.getItem('watchlist'));
    if (watchList && !!watchList.length) {
      this.props.addMoviewToStore(watchList);
    }
  }

  render() {
    const { list } = this.props;

    return (
      list && (
        <div className="watchlist-container">
          <h2 className="watch_list">Watchlist</h2>
          <ul>
            {!!list.length &&
              list.map(el => <WatchCard movie={el} key={uuidv4()} />)}
          </ul>
        </div>
      )
    );
  }
}

WatchList.defaultProps = {
  list: []
};

WatchList.propTypes = {
  list: PropTypes.array
};

const mapStateToProps = state => ({
  list: getWatchList(state)
});

const mapDispatchToProps = dispatch => ({
  addMoviewToStore: x => dispatch(addMovieToWatchlist(x))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
