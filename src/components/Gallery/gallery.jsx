import React, { Component } from 'react';
import axios from 'axios';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import api from '../../utils/api';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    height: 667,
    overflowY: 'auto',
    width: 375,
    padding: '20px 0 0',
  },
};

const axiosParams = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Accept': 'application/json',
  },
};

class GridListExampleComplex extends Component {
  constructor() {
    super();
    this.handleTileClick = this.handleTileClick.bind(this);

    this.state = {
      isLoading: true,
      gallery: null,
      error: null,
    };
  }

  componentDidMount() {
    axios.get(api.url)
      .then((response) => {
        this.setState({ 
          isLoading: false,
          gallery: response.data,
        });
      })
      .catch((error) => {
        this.setState({ 
          isLoading: false,
          error: error,
        });
      });
  }

  handleTileClick(tileId) {
    this.setState({ isLoading: true });

    axios.put(`${api.url}/${tileId}/like`, axiosParams)
      .then((response) => {
        if (response.data) {
          this.setState({ 
            isLoading: false,
            gallery: response.data,
          });
        } else {
          throw new Error('No data has been provided');
        }
      })
      .catch((error) => {
        this.setState({ 
          isLoading: false,
          error: error.message,
        });
      });
  }

  render() {
    const { isLoading, gallery, error } = this.state;

    return (
      <div>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div style={styles.root}>
            {error && <p>{error}</p>}

            <GridList
              cols={2}
              cellHeight={200}
              padding={1}
              style={styles.gridList}
            >
              {gallery && gallery.map((tile) => (
                <GridTile
                  key={tile.img}
                  title={tile.title}
                  actionIcon={<IconButton onClick={(event) => this.handleTileClick(tile.id)}>
                    <StarBorder color={tile.liked ? 'yellow' : 'white'} />
                  </IconButton>}
                  actionPosition="left"
                  titlePosition="top"
                  titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                  cols={tile.featured ? 2 : 1}
                  rows={tile.featured ? 2 : 1}
                >
                  <img src={`images/${tile.img}`} alt="" />
                </GridTile>
              ))}
            </GridList>
          </div>
        )}
      </div>
    );
  }
}

export default GridListExampleComplex;