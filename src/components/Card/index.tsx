import React from "react";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { OfferModel } from "../../models/OfferModel";
import { CardContainer, Media } from "./styles";

const defaultImage =
  "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";

interface Props {
  item: OfferModel;
}

export default function Card({ item }: Props) {
  const onClick = () => {
    console.log("Method is not implemented yet.");
  };

  const getImage = (image: string) => {
    return image ? image : defaultImage;
  };

  return (
    <CardContainer>
      <CardActionArea>
        <Media image={getImage(item.image)} title={item.name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {item.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={onClick}
        >
          More Details
        </Button>
      </CardActions>
    </CardContainer>
  );
}
