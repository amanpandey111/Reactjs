import { DeleteAllUser } from "./DeleteAllUser";       //! Importing component
import styled from "styled-components";                //! Importing styled 
import { fakeUserData } from "../api";                 //! Importing Fakeuserdata api 
import { useDispatch } from "react-redux";             //! Importing useDispatch to call the micro reducer
import { addUser } from "../store/slices/UserSlice";   //todo Importing addUser reducer to add the username in state
import DisplayUsers from "./DisplayUsers";

const UserDetails = () => {
    const dispatch = useDispatch();
    const addNewUser = (payload) => {
        // console.log(payload);
        dispatch(addUser(payload))
    }
  return (
    <Wrapper>
      <div className="content">
        <div className="admin-table">
          <div className="admin-subtitle">List of User Details</div>
          <button className="btn add-btn" onClick={()=>addNewUser(fakeUserData())}>Add New Users</button>
        </div>
        <ul>
          {/* <li>Hi</li>
          <li>Hii</li> */}
          <DisplayUsers/>
        </ul>
        {/* <hr /> */}
        <DeleteAllUser />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .content ul {
    list-style-type: none !important;
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin: 0;
  }

  .admin-table {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 4rem 0;
  }

  .admin-subtitle {
    font-size: 3.2rem;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
  @media screen and (max-width: 998px) {
    .admin-subtitle {
      margin-bottom: 1.6rem;
    }
  }
`;

export default UserDetails;