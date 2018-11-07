import PropTypes from 'prop-types';
import React from 'react';
import { getPoster } from '../../utils/utils';
import './Watchcard.css';
import { removeCard } from './action';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  card: {
    display: 'flex'
  },

  btn: {
    position: 'absolute',
    top: '85px',
    left: '255px'
  }
};

const WatchCard = ({ movie, removeMoviewFromStore }) => {
  return (
    movie && (
      <li className="watch-list__card">
        <Card style={styles.card}>
          <img
            src={getPoster(movie.poster_path)}
            alt={movie.title}
            className="watch-list__img"
          />
          <div>
            <h3>{movie.title}</h3>
            <p>{`Rating ${movie.popularity}`}</p>
            <Button
              variant="fab"
              onClick={() => removeMoviewFromStore(movie.id)}
              style={styles.btn}
            >
              <DeleteIcon />
            </Button>
          </div>
        </Card>
      </li>
    )
  );
};

WatchCard.defaultProps = {
  movie: {}
};

WatchCard.propTypes = {
  movie: PropTypes.object
};

const mapDispatchToProps = dispatch => ({
  removeMoviewFromStore: x => dispatch(removeCard(x))
});

export default connect(
  null,
  mapDispatchToProps
)(WatchCard);
