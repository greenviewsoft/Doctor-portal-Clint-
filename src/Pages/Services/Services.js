import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../images/fluoride.png'
import cavity from '../../images/cavity.png'
import whitening from '../../images/whitening.png'

const services = [
   {
       name: 'Fluoride Treatment',
       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
       img: fluoride
   },
   {
       name: 'Cavity Filling',
       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
       img: cavity
   },
   {
       name: 'Teeth Whitening',
       description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
       img: whitening
   },
]

const Services = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
      <Container>
        <Typography sx={{fontWeight: 500, m: 4, color: 'success.main'}} variant="h5" component="div">
          OUR SERVICES
        </Typography>
        <Typography sx={{fontWeight: 600}} variant="h5" component="div">
          Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {
           services.map(service => <Service
           key={service.name}
           service={service}
           ></Service>) 
        }
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;