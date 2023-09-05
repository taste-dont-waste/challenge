import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  ImageListItemBar,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { useTranslation } from "react-i18next";

type Link = "train" | "hotel-results" | "restaurant-results";

type ClickablePictureProps = {
  link: Link;
  picture: string;
  city: string;
  trainStation: string;
};

const ClickablePicture = ({ picture, city, trainStation, link }: ClickablePictureProps) => {
  let url: string = link;

  if (link === "train") {
    url = url.concat("?destination=", trainStation);
  } else {
    url = url.concat("?searchTerm=", city);
  }

  return (
    <Grid item lg={4} md={6} xs={12}>
      <CardActionArea href={url}>
        <CardMedia component="img" sx={{ maxHeight: 170, borderRadius: "4px" }} image={picture} />
        <ImageListItemBar
          title={
            <Typography variant="h6" color="black">
              {city}
            </Typography>
          }
          sx={{ backgroundColor: "white", opacity: "0.8" }}
        />
      </CardActionArea>
    </Grid>
  );
};

const useDestinationData = () => {
  const { t } = useTranslation();

  return [
    {
      picture:
        "https://aws-tiqets-cdn.imgix.net/images/content/7a632354f0c84f76895d998df075bc23.jpg?auto=format&fit=crop&ixlib=python-3.2.1&q=70&s=6f021ae4f861f9fc5c1529181b293b65",
      city: t("common.city.hamburg"),
      trainStation: "Hamburg Hbf",
    },
    {
      picture:
        "https://www.visitberlin.de/system/files/styles/visitberlin_bleed_header_visitberlin_mobile_1x/private/image/iStock_000074120341_Double_DL_PPT_0.jpg?h=a66ba266&itok=2YXS5_33",
      city: t("common.city.berlin"),
      trainStation: "Berlin Gesundbrunnen",
    },
    {
      picture: "https://viel-unterwegs.de/wp-content/uploads/2021/11/muenchen-article-reiseberichte.jpg",
      city: t("common.city.munich"),
      trainStation: "München Hbf",
    },
    {
      picture: "https://www.travelbook.de/data/uploads/2022/03/gettyimages-1165294237-1024x682.jpg",
      city: t("common.city.frankfurt"),
      trainStation: "Frankfurt (Main) Hbf",
    },
    {
      picture: "https://www.koeln.de/wp-content/uploads/2022/11/Koeln-Dom.jpg",
      city: t("common.city.cologne"),
      trainStation: "Köln Hbf",
    },
    {
      picture:
        "https://www.holidaywolf.de/wp/wp-content/uploads/2022/06/stuttgart-sehenswuerdigkeiten-1024x768.jpg",
      city: t("common.city.stuttgart"),
      trainStation: "Stuttgart Hbf",
    },
  ];
};

type DestinationCardsProps = {
  link: Link;
};
const DestinationCards = ({ link }: DestinationCardsProps) => {
  const destinations = useDestinationData();

  return (
    <Grid container spacing={2} sx={{ mt: 0 }}>
      {destinations.map((destination) => (
        <ClickablePicture key={destination.city} {...destination} link={link} />
      ))}
    </Grid>
  );
};

export const TrainDestinationsCard = () => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Card sx={{ borderRadius: "4px" }}>
      <CardContent>
        <Stack direction="row" spacing={"12px"} alignItems="center">
          <Typography variant="h5" display="inline" fontWeight="bold">
            {t("explore.destinations.title")}
          </Typography>
        </Stack>
        <Typography variant="h6" display="inline" color="grey">
          {t("explore.destinations.subtitle1")}&nbsp;
        </Typography>
        <Typography variant="h6" display="inline" sx={{ color: theme.challenge.success }}>
          {t("explore.destinations.subtitleHighlight")}&nbsp;
        </Typography>
        <Typography variant="h6" display="inline" color="grey">
          {t("explore.destinations.subtitle2")}
        </Typography>
        <DestinationCards link="train" />
      </CardContent>
    </Card>
  );
};

export const HotelDestinationsCard = () => {
  const { t } = useTranslation();

  return (
    <Card sx={{ borderRadius: "4px" }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5" display="inline" fontWeight="bold">
            {t("hotel.overview.popularDestinationsTitle")}
          </Typography>
        </Stack>
        <Typography variant="h6" display="inline" color="grey">
          {t("hotel.overview.popularDestinationsSubtitle")}&nbsp;
        </Typography>
        <DestinationCards link="hotel-results" />
      </CardContent>
    </Card>
  );
};

export const RestaurantDestinationsCard = () => {
  const { t } = useTranslation();

  return (
    <Card sx={{ borderRadius: "4px" }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Typography variant="h5" display="inline" fontWeight="bold">
            {t("restaurant.overview.popularDestinationsTitle")}
          </Typography>
        </Stack>
        <Typography variant="h6" display="inline" color="grey">
          {t("restaurant.overview.popularDestinationsSubtitle")}&nbsp;
        </Typography>
        <DestinationCards link="restaurant-results" />
      </CardContent>
    </Card>
  );
};
