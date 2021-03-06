import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { StaticQuery, graphql } from "gatsby";

import _01 from "../../images/Media/01-Sound_System_Rental.jpeg";
import _02 from "../../images/Media/02-Live_Sound_Reinforcement.jpeg";
import _03 from "../../images/Media/03-Dj-VDJ-Karaoke.jpeg";
import _04 from "../../images/Media/04-Conciertos_Musicos-Mezcla_FOH.png";
import _05 from "../../images/Media/05-Live_Music_Cancun.jpeg";
import _06 from "../../images/Media/06-djs_speakers_rental.jpeg";
import _07 from "../../images/Media/07-Bodas_Weddings_Cancun_PDC_Tulum.jpeg";
import _08 from "../../images/Media/08-Sonorizacion_profesional.jpeg";
import _09 from "../../images/Media/09-Renta_de_audio_e_iluminacion_profesional.jpeg";
import _10 from "../../images/Media/10-Luz_y_sonido_profesional.jpeg";
import _11 from "../../images/Media/11_Mezcla_FOH_monitores.jpeg";
import _12 from "../../images/Media/12-Fiestas_Karaoke_Bodas_Proyector_Pantallas.jpeg";
import _13 from "../../images/Media/13-Grabacion_multitrack_24bit.jpg";

const media = [
  { original: _01 },
  { original: _02 },
  { original: _03 },
  { original: _04 },
  { original: _05 },
  { original: _06 },
  { original: _07 },
  { original: _08 },
  { original: _09 },
  { original: _10 },
  { original: _11 },
  { original: _12 },
  { original: _13 }
];

class ControlledCarousel extends React.PureComponent {
  imgs = () => (
    <StaticQuery
      query={graphql`
        query {
          allFile(filter: { sourceInstanceName: { eq: "Media" } }) {
            edges {
              node {
                extension
                dir
                modifiedTime
              }
            }
          }
        }
      `}
      render={data => console.log(data)}
    />
  );

  render() {
    return (
      <div className="slideshow-container">
        <ImageGallery style={{ borderRadius: "5px" }} items={media} />
        <this.imgs />
      </div>
    );
  }
}

export default ControlledCarousel;
