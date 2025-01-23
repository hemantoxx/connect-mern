import { textAlign } from "@mui/system";
import "./JobCard.css";

const JobCard = (props) => {
  {/*
  stars neigbourhood
  name
  address
  date
  price
  */}
  
  return (
    <table className='box' >
      <tr>
        <td rowSpan={5}>
          <img src={require('../images/flat.jpg')} style={{marginRight: '10px'}}></img>
        </td>
        <td><h1 style={{textAlign:"center"}}>BANDRA</h1></td>
      </tr>
      <tr>
        <td>
          Foot Over Bridge Khar, Govind Dham, Ram Krishna Nagar, Khar West, Mumbai, Maharashtra 400052
        </td>
      </tr>
      <tr>
        <td>
          Date
        </td>
      </tr>
      <tr>
        <td>
          <div className="capsule">
            Price : 2Cr - 3Cr
          </div>
        </td>
      </tr>
      <tr>
        <td>
          Stars:
        </td>
      </tr>
    </table>
  );
};

export default JobCard;