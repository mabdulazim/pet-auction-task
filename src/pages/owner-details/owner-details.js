import React, { useEffect, useState, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import API from '../../utils/api';
import PetCard from '../../components/PetCard';
import OwnerCard from '../../components/OwnerCard';


function OwnerDetails(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [owner, setOwner] = useState({});
  const [pets, setPets]   = useState([]);

  useEffect(() => {
    API('GET', `owner/${props.match.params.id}`)
    .then(res => {
      if(res.data && res.data.data) {
          setPets(res.data.data);
          setOwner(res.data.data[0].owner);
          setIsLoading(false);
      }
    });
  }, []);

  return (
    <>
      {isLoading ? 
        <div className="loader"></div>
      :
      <Fragment>

        <OwnerCard owner={owner} />

        <h1 className="page-title">Owned Pets</h1>

        {pets.length === 0 && <div className="no-results"> No Results !</div>}
        
        <Grid container spacing={10}>
        {pets.map(pet => {
          return (
            <Grid item xs={12} sm={6} md={4} space={5} key={pet.id}>
              <PetCard pet={pet} showOwner={false} />
            </Grid>
          );
        })};
        </Grid>

      </Fragment>
      }
    </>
  );
}

export default OwnerDetails;