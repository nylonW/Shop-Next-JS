import { ThemeProvider } from "@emotion/react";
import { Button, Grid, Paper, Typography, createTheme, Box } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const buttonTheme = createTheme({
    backgroundColor: '#DC143C'
});

const ProductPage = ({ product }) => {
    return (
        <>
            <Grid container spacing={2} p={2} alignItems="center" justifyContent="center">
                <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                    <Paper variant="outlined">
                        <Box p={2}>
                            <img style={{ objectFit: 'cover', width: '100%', height: '100%' }} src={`http://localhost:1337${product.image.url}`}></img>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6} xl={4}>
                    <Typography variant="h3" component="div" gutterBottom>
                        {product.name}
                    </Typography>

                    <Typography variant="h5" component="div" gutterBottom>
                        {product.content}
                    </Typography>
                    <Button
                        variant='contained'
                        endIcon={<SendIcon />}
                        style={{ backgroundColor: '#B22222', color: 'white' }}
                    >
                        Zamów
                    </Button>
                </Grid>
            </Grid>
        </>
    );
}

export async function getStaticPaths() {
    const product_res = await fetch(`http://localhost:1337/products/`);
    const products = await product_res.json();

    return {
        paths: products.map(product => ({
            params: { product: String(product.slug) }
        })),
        fallback: false
    }
}

export async function getStaticProps({ params: { product } }) {
    const res = await fetch(`http://localhost:1337/products?slug=${product}`);
    const found = await res.json();

    return { props: { product: found[0] } };
}

export default ProductPage;
