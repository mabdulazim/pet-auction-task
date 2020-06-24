import React from 'react';
import Grid from '@material-ui/core/Grid';
import './BidCard.scss';
import userPhoto from '../../assets/images/user.jpg';

function BidCard({ bid : { user : { name, amount_money } }, isWinner }) {

  return (
    <div className="bid-card-container">

    <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={6} space={0}>
            <div className="bid-user">
                <div className="bid-user-image">
                    <img src={userPhoto} alt={name} />
                </div>
                <div className="bid-user-info">
                    <span>{ amount_money }$</span>
                    <span>{ name }</span>
                </div>
            </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6} space={0}>
            <div className="bid-status">
            {isWinner ? 
                <span className="bid-winner-status">WINNER</span>
            :
                <span className="bid-next-time-status">NEXT TIME</span>
            }
            </div>
        </Grid>

    </Grid>

    </div>
  );
}


export default BidCard;