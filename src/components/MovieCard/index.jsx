import React from 'react';
import { getPoster, getFullMovieInfo } from '../../utils/utils';
import './MovieCard.css';
import Modal from '../Modal';
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';
import { addMovieToWatchlist } from './action';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = {
  addBtn: {
    position: 'absolute',
    top: '420px',
    left: '230px'
  }
};

class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowModal: false,
      fullMovieData: {},
      loading: false,
      loadingImg: true
    };
  }

  hideSpinnerImg = () => {
    this.setState({
      isShowModal: false
    });
  };

  hideModal = () => {
    this.setState({
      loadingImg: false
    });
  };

  getFullInfo = id => {
    this.setState({
      loading: true
    });

    return getFullMovieInfo(id).then(data =>
      this.setState({
        isShowModal: true,
        fullMovieData: { ...data },
        loading: false
      })
    );
  };

  render() {
    const { movie, addMoviewToStore } = this.props;

    return (
      movie &&
      movie.poster_path && (
        <li className="card">
          <Card>
            <div className="img_container">
              {this.state.loadingImg && (
                <div className="loader-img">
                  <Loader
                    type="Oval"
                    color="#00BFFF"
                    height="100"
                    width="100"
                  />
                </div>
              )}
              <img
                src={getPoster(movie.poster_path)}
                alt={movie.title}
                className="img"
                onLoad={this.hideModal}
              />
            </div>
            <div className="card_info">
              <h3 className="title">{movie.title}</h3>
              <p>{`Rating ${movie.popularity}`}</p>
              <p className="description">{movie.overview}</p>
              <Button
                variant="contained"
                color="primary"
                onClick={() => this.getFullInfo(this.props.movie.id)}
              >
                Show more details
              </Button>

              <Button
                variant="fab"
                color="secondary"
                aria-label="Add"
                onClick={() => addMoviewToStore(movie)}
                style={styles.addBtn}
              >
                <AddIcon />
              </Button>
            </div>

            {this.state.isShowModal && Object.keys(this.state.fullMovieData) ? (
              <Modal closeModal={this.hideModal}>
                <h2>{this.state.fullMovieData.title}</h2>
                <p>{this.state.fullMovieData.overview}</p>
                <p>{`Budget: ${this.state.fullMovieData.budget}$`}</p>
              </Modal>
            ) : (
              this.state.loading && (
                <div className="loader-modal">
                  <Loader
                    type="Oval"
                    color="#00BFFF"
                    height="100"
                    width="100"
                  />
                </div>
              )
            )}
          </Card>
        </li>
      )
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addMoviewToStore: x => dispatch(addMovieToWatchlist(x))
});

export default connect(
  null,
  mapDispatchToProps
)(MovieCard);
