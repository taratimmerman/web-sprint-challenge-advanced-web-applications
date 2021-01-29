import React, { useEffect, useState } from 'react';
import axiosWithAuth from '../helpers/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const fetchColors = () => {
    axiosWithAuth()
      .get('/api/colors')
      .then((res) => setColorList(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

//Task List:
//1. Make an axios call to retrieve all color data and push to state on mounting.

//arbitrary change for codegrade submission