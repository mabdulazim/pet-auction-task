import React, { useEffect, useState, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import API from '../../utils/api';
import BidCard from '../../components/BidCard';

function PetDetails(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [bids, setBids] = useState([]);
  const [winnerAmount, setWinnerAmount] = useState('');

  useEffect(() => {
    API('GET', `pets/${props.match.params.id}`)
    .then(res => {
      if(res.data && res.data.data && res.data.data.bids) {
        setBids(res.data.data.bids);
        findWinner(res.data.data.bids);
        setIsLoading(false);
      }
    });
  }, []);

  const findWinner = (bids) => {
    let tempWinnerAmount = 0;
    bids.forEach(bid => {
      if(bid.user.amount_money > tempWinnerAmount) {
        tempWinnerAmount = bid.user.amount_money;
      }
    });
    setWinnerAmount(tempWinnerAmount);
  }

  return (
    <>
      {isLoading ? 
        <div className="loader"></div>
      :
      <Fragment>

        <h1 className="page-title">Final Result</h1>
        
        <div style={{borderRadius: '4px', borderTop: '4px solid #2a8ffa' }}>
          <Grid container spacing={0}>
            {bids.map((bid, i) => {
              return (
                <Grid item xs={12} sm={12} md={12} space={0} key={i}>
                  <BidCard 
                    bid={bid} 
                    isWinner={bid.user.amount_money === winnerAmount ? true : false} 
                  />
                </Grid>
              );
            })
            }
          </Grid>
        </div>

      </Fragment>
      }
    </>
  );
}

export default PetDetails;