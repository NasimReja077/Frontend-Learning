import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const ImagePopup = ({ open, onClose, image }) => {
  return (
    <Lightbox
      open={open}
      close={onClose}
      slides={[{ src: image }]}
      carousel={{ finite: true }}
      render={{
        buttonPrev: () => null,
        buttonNext: () => null,
      }}
    />
  );
};
