//Anime images
import img1 from '../Main/previewImages/img1.jpg'
import img2 from '../Main/previewImages/img2.jpg'
import img3 from '../Main/previewImages/img3.jpg'
import img4 from '../Main/previewImages/img4.jpg'
import anime1 from '../Main/images/anime1.jpg'
import anime2 from '../Main/images/anime2.jpg'
import anime3 from '../Main/images/anime3.jpg'
import anime4 from '../Main/images/anime4.jpg'
import anime5 from '../Main/images/anime5.jpg'
import anime6 from '../Main/images/anime6.jpg'
import anime7 from '../Main/images/anime7.jpg'
import anime8 from '../Main/images/anime8.jpg'
import anime9 from '../Main/images/anime9.jpg'
import anime10 from '../Main/images/anime10.jpg'
import anime11 from '../Main/images/anime11.jpg'
import anime12 from '../Main/images/anime12.jpg'
import anime13 from '../Main/images/anime13.jpg'
import anime14 from '../Main/images/anime14.jpg'

//Classic
import classic1 from '../Main/images/classic1.jpg'
import classic2 from '../Main/images/classic2.jpg'
import classic3 from '../Main/images/classic3.jpg'

//Classic Graphics

import graph1 from '../Main/images/graph1.png'

//Anime Painting

import paint1 from '../Main/images/anPaint1.png'

//Preview Gifs 
import classicPainting from '../Main/gifs/classicPaint.gif'
import animePaint from '../Main/gifs/animPaint.gif'
import animeGraph from '../Main/gifs/animeGraph.gif'






const products = [
  {
    name: "Classic Painting",
    id: 1,
    image: img1,
    preview:classicPainting,
    images: [
      classic1,
      classic2,
      classic3
    ],
  },
  { name: "Classic Graphics", id: 2, image: img2,
  preview:classicPainting,
  images: [
    graph1
  ], },
  { name: "Anime Painting", id: 3, image: img3,
  preview:animePaint,
  images: [
    paint1
  ], },
  {
    name: "Anime Graphics",
    id: 4,
    image: img4,
    preview:animeGraph,
    images: [
      anime1,
      anime2,
      anime3,
      anime4,
      anime5,
      anime6,
      anime7,
      anime8,
      anime9,
      anime10,
      anime11,
      anime12,
      anime13,
      anime14,
    ],
  },
  { name: "Your Own Mind", id: 5, image:''},
];

export default products;