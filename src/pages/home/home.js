import React, { useEffect, useState, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import API from '../../utils/api';
import PetCard from '../../components/PetCard';

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    API('GET', 'pets')
    .then(res => {
      setPets(res.data.data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? 
        <div className="loader"></div>
      :
      <Fragment>

        <h1 className="page-title">Explore all pets</h1>
        
        <Grid container spacing={10}>
        {pets.map(pet => {
          return (
            <Grid item xs={12} sm={6} md={4} space={5} key={pet.id}>
              <PetCard pet={pet} showOwner={true} />
            </Grid>
          );
        })}
        </Grid>

      </Fragment>
      }
    </>
  );

}


export default Home;
