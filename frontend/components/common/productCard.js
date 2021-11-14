import { Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";

const ProductCard = ({product}) => {
    return (
        <Card variant='outlined'>
            <CardActionArea>
                <CardMedia 
                    component="img"
                    image={`http://localhost:1337${product.image.url}`}
                    style={{maxHeight: 160}}
                />
           
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        {product.meta_description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ProductCard;