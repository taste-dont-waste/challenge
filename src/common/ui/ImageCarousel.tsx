import { Carousel } from "@common/ui";
import { CardMedia } from "@mui/material";

type ImageCarouselProps = {
  images: string[];
  initialStep?: number;
};

export const ImageCarousel = ({ initialStep, images }: ImageCarouselProps) => {
  return (
    <Carousel initialStep={initialStep}>
      {images.map((image) => (
        <CardMedia
          key={image.slice(0, 24)}
          component="img"
          sx={{ maxHeight: 500, borderRadius: "4px" }}
          image={image}
        />
      ))}
    </Carousel>
  );
};
