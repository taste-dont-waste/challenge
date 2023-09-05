import { useTranslation } from "react-i18next";
import { Box, CardActionArea, ImageList, ImageListItem, Stack, Typography } from "@mui/material";
import { Add, HideImageOutlined } from "@mui/icons-material";
import { useRef, useState } from "react";
import { ChallengeModal, ChallengeModalRefProps } from "./ChallengeModal";
import { ImageCarousel } from "./ImageCarousel";

const ImageActionOverlay = () => {
  const { t } = useTranslation();

  return (
    <Box
      position="absolute"
      top={0}
      bottom={0}
      left={0}
      right={0}
      sx={{
        opacity: 0.9,
        background: "white",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <Stack direction="row" alignItems="center">
        <Typography color="primary">{t("common.moreImages").toUpperCase()}</Typography>
        <Add color="primary" />
      </Stack>
    </Box>
  );
};
const IMAGES_LENGTH = 4;

type DetailsImageListProps = {
  images: string[];
};
export const DetailsImageList = ({ images }: DetailsImageListProps) => {
  const modalRef = useRef<ChallengeModalRefProps>(null);
  const [initialStep, setInitialStep] = useState(0);

  const slicedImages = images.slice(0, IMAGES_LENGTH);

  if (images.length === 0) {
    return (
      <Box display="flex" justifyContent="center">
        <HideImageOutlined sx={{ color: "grey", fontSize: "200px" }} />
      </Box>
    );
  }

  return (
    <>
      <ImageList sx={{ borderRadius: "4px" }} variant="quilted" rowHeight={164} cols={IMAGES_LENGTH}>
        {slicedImages.map((image, index) => {
          const size = index === 0 ? 3 : 1;

          const isLast = index === slicedImages.length - 1;

          const openImageModal = (index: number) => {
            setInitialStep(index);

            modalRef.current?.open();
          };

          return (
            <ImageListItem
              key={image.slice(0, 24)}
              cols={size}
              rows={size}
              onClick={() => openImageModal(index)}
            >
              <img src={image} loading="lazy" />
              {isLast && <ImageActionOverlay />}
              <CardActionArea
                sx={{
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              />
            </ImageListItem>
          );
        })}
      </ImageList>
      <ChallengeModal ref={modalRef}>
        <ImageCarousel initialStep={initialStep} images={images} />
      </ChallengeModal>
    </>
  );
};
