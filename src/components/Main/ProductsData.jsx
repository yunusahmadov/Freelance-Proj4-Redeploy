//Anime images
import img1 from '../Main/previewImages/img1.webp'
import img2 from '../Main/previewImages/img2.webp'
import img3 from '../Main/previewImages/img3.webp'
import img4 from '../Main/previewImages/img4.webp'
import anime1 from '../Main/images/anime1.webp'
import anime2 from '../Main/images/anime2.webp'
import anime3 from '../Main/images/anime3.webp'
import anime4 from '../Main/images/anime4.webp'
import anime5 from '../Main/images/anime5.webp'
import anime6 from '../Main/images/anime6.webp'
import anime7 from '../Main/images/anime7.webp'
import anime8 from '../Main/images/anime8.webp'
import anime9 from '../Main/images/anime9.webp'
import anime10 from '../Main/images/anime10.webp'
import anime11 from '../Main/images/anime11.webp'
import anime12 from '../Main/images/anime12.webp'
import anime13 from '../Main/images/anime13.webp'
import anime14 from '../Main/images/anime14.webp'

//Classic
import classic1 from '../Main/images/classic1.webp'
import classic2 from '../Main/images/classic2.webp'
import classic3 from '../Main/images/classic3.webp'

//Classic Graphics

import graph1 from '../Main/images/graph1.webp'

//Anime Painting

import paint1 from '../Main/images/anPaint1.webp'

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