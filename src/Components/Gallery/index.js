import React from 'react';
import ImageGallery from 'react-image-gallery';
import './style.css';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

export default class Footer extends React.Component {
  render() {
    return (
      <section className="container gallery" id="gallery">
        <h3 className="gallery-bg">Fotos</h3>
        <h1 className="gallery-title">Nosso Acervo.</h1>
        <div className="row">
          <div className="col-lg-4">
            <h2 className="gallery-subtitle">Bandejas</h2>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              slideDuration={800}
            />

          </div>
          <div className="col-lg-4">
            <h2 className="gallery-subtitle">Mesas e Cilindros</h2>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              slideDuration={800}
            />

          </div>
          <div className="col-lg-4">
            <h2 className="gallery-subtitle">Vazos</h2>
            <ImageGallery
              items={images}
              showFullscreenButton={false}
              showPlayButton={false}
              slideDuration={800}
            />
          </div>
        </div>
      </section>
    );
  }
}
