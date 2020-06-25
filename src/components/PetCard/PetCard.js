import React, { useState } from 'react';
import './PetCard.scss';
import toastr from 'toastr';
import 'toastr/toastr.scss';
import API from '../../utils/api';
import { Link } from 'react-router-dom';

function PetCard({pet : { id, name, type, url, owner }, showOwner}) {
  // STATES
  const [isLoading, setIsLoading] = useState(false);
  const [showBidForm, setShowBidForm] = useState(false);
  const [bidName, setBidName] = useState("");
  const [bidAmount, setBidAmount] = useState("");
  const [validationErrors, setValidationErrors] = useState({
    name: "",
    amount: "",
  });

  const handleInputsChange = (e) => {
    switch (e.target.name) {
      case 'name':
        setBidName(e.target.value);
        setValidationErrors(oldValue => ({...oldValue, name : "" }));
        break;
      case 'money':
        setBidAmount(e.target.value);
        setValidationErrors(oldValue => ({...oldValue, amount : "" }));
        break;
      default:
        break;
    }
  }

  const handleBidSubmit = () => {

    // APPLY VALIDATION
    const IsValid = handleInputsValidation();
    if(!IsValid) return false;

    // LOADING
    setIsLoading(true);

    // SEND API REQUEST
    API("POST", `bids/${id}`, {}, {
      bid : {
        user : {
          name: bidName,
          amount_money: bidAmount
        }
      }
    }).then(res => {
      if(res.status === 200) {
        toastr.success('Submitted Successfully', 'Bid', { timeOut: 3000 });
        setShowBidForm(false); // HIDE FORM
        setBidName(""); // CLEAR STATE
        setBidAmount(""); // CLEAR STATE
        setIsLoading(false); // REMOVE LOADER
      }
    });
  }

  const handleInputsValidation = () => {
    if(bidName === "") {
      setValidationErrors(oldValue => ({...oldValue, name : "name is required" }));
      return false;
    }
    if(bidAmount === "") {
      setValidationErrors(oldValue => ({...oldValue, amount : "amount is required" }));
      return false;
    }
    else if(bidAmount <= 0) {
      setValidationErrors(oldValue => ({...oldValue, amount : "amount should be greater than 0" }));
      return false;
    }
    return true;
  }

  return (
    <div className="pet-card-container">
      <div className="pet-card-image">
        <Link to={`/pets/${id}`}>
          <img src={url} alt={name} />
        </Link>
        
        {showBidForm &&
        <div className="bid-form-container">
            <div className="bid-form">

              <div className="bid-input-group">
                <input disabled={isLoading ? true : false} type="text" name="name" placeholder="Name" onChange={handleInputsChange} />
                {validationErrors && validationErrors.name !== "" && <span className="input-error">{validationErrors.name}</span> }
              </div>

              <div className="bid-input-group">
                <input disabled={isLoading ? true : false} type="number" min="0" name="money" placeholder="Money Amount" onChange={handleInputsChange} />
                {validationErrors && validationErrors.amount !== "" && <span className="input-error">{validationErrors.amount}</span>  }
              </div>  

              {isLoading ? 
                <div class="bid-form-loader"></div> 
              :  
                <button onClick={handleBidSubmit}>PARTICIPATE</button>
              }
            
            </div>
        </div>
        }
      </div>

      <div className="pet-card-info">
        <Link to={`/pets/${id}`}>
          <h3>{name}</h3>
          <span>{type}</span>
        </Link>

        <div className="owner-info">
          {showOwner &&
          <Link to={`/owners/${owner.id}`}>
            <img src={owner.url} alt={owner.name} />
            <span>{owner.name}</span>
          </Link>
          }
        </div>
      </div>

      <button className="pet-card-btn" onClick={() => setShowBidForm(oldValue => !oldValue) }>
        BID
      </button>
    </div>
  );
}


export default PetCard;