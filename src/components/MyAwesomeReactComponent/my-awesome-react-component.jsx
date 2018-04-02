import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingTop: 75,
  },
  gridList: {
    height: 680,
    overflowY: 'auto',
    width: 500,
  },
};

const tilesData = [
  {
    img: 'https://placeholdit.co//i/250x250?bg=111111',
    title: 'Breakfast',
    author: 'jill111',
    featured: true,
  },
  {
    img: 'https://placeholdit.co//i/250x250?bg=111111',
    title: 'Tasty burger',
    author: 'pashminu',
  },
  {
    img: 'https://placeholdit.co//i/250x250?bg=111111',
    title: 'Camera',
    author: 'Danson67',
  },
  {
    img: 'https://placeholdit.co//i/250x250?bg=111111',
    title: 'Morning',
    author: 'fancycrave1',
    featured: true,
  },
  {
    img: 'https://placeholdit.co//i/250x250?bg=111111',
    title: 'Hats',
    author: 'Hans',
  },
  {
    img: 'https://placeholdit.co//i/250x250?bg=111111',
    title: 'Honey',
    author: 'fancycravel',
  },
  {
    img: 'https://placeholdit.co//i/250x250?bg=111111',
    title: 'Vegetables',
    author: 'jill111',
  },
  {
    img: 'https://placeholdit.co//i/250x250?bg=111111',
    title: 'Water plant',
    author: 'BkrmadtyaKarki',
  },
];

const GridListExampleComplex = () => (
  <div style={styles.root}>
    <GridList
      cols={2}
      cellHeight={200}
      padding={1}
      style={styles.gridList}
    >
      {tilesData.map((tile) => (
        <GridTile
          key={tile.img}
          title={tile.title}
          actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
          actionPosition="left"
          titlePosition="top"
          titleBackground="linear-gradient(to bottom, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
          cols={tile.featured ? 2 : 1}
          rows={tile.featured ? 2 : 1}
        >
          <img src={tile.img} alt="" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;