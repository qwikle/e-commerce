interface ImageArticle {
  id: string;
  src: string;
  alt: string;
  thumbnail: {
    src: string;
    alt: string;
  };
}

const imagesArticles: Array<ImageArticle> = [
  {
    id: "1",
    src: "../images/image-product-1.jpg",
    alt: "sneaker choes",
    thumbnail: {
      src: "../images/image-product-1-thumbnail.jpg",
      alt: "thumbnail of sneaker shoes",
    },
  },
  {
    id: "2",
    src: "../images/image-product-2.jpg",
    alt: "sneaker choes on roc",
    thumbnail: {
      src: "../images/image-product-2-thumbnail.jpg",
      alt: "thumbnail of sneaker shoes on roc",
    },
  },
  {
    id: "3",
    src: "../images/image-product-3.jpg",
    alt: "sneaker choes",
    thumbnail: {
      src: "../images/image-product-3-thumbnail.jpg",
      alt: "thumbnail of sneaker shoes",
    },
  },
  {
    id: "4",
    src: "../images/image-product-4.jpg",
    alt: "sneaker choes",
    thumbnail: {
      src: "../images/image-product-4-thumbnail.jpg",
      alt: "thumbnail of sneaker shoes",
    },
  },
];

export default imagesArticles;
