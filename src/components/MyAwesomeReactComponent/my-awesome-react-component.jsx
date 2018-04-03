import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
  },
};

const tilesData = [
  {
    img: 'Avenida Paulista.jpg',
    title: 'Avenida Paulista',
    featured: true,
  },
  {
    img: 'Beco do Batman.jpg',
    title: 'Beco do Batman',
  },
  {
    img: 'Catedral Sao Paulo.jpg',
    title: 'Catedral São Paulo',
  },
  {
    img: 'Edificio Italia.jpg',
    title: 'Edifício Itália',
    featured: true,
  },
  {
    img: 'Favela Paraisopolis.jpg',
    title: 'Favela Paraisópolis',
  },
  {
    img: 'Monumento as Bandeiras.jpeg',
    title: 'Monumento aos Bandeiras',
  },
  {
    img: 'Museu de Arte de Sao Paulo - MASP.jpg',
    title: 'Museu de Arte de São Paulo - MASP',
  },
  {
    img: 'Parque Villa-Lobos.jpg',
    title: 'Parque Villa-Lobos',
  },
  {
    img: 'Patio do Colegio.jpg',
    title: 'Pátio do Colégio',
  },
  {
    img: 'Pinacoteca do Estado de Sao Paulo.jpg',
    title: 'Pinacoteca do Estado de São Paulo',
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
          <img src={`images/${tile.img}`} alt="" />
        </GridTile>
      ))}
    </GridList>
  </div>
);

export default GridListExampleComplex;