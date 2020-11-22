import { func } from "prop-types";
import React from "react";

const users = [
    {
        userId: 1,
        firstName: "Jon",
        lastName: "Doe",
      },
      {
        userId: 2,
        firstName: "Jane",
        lastName: "Doe",
      },
      {
        userId: 3,
        firstName: "Jon",
        lastName: "Doe",
      },
      {
        userId: 4,
        firstName: "Jane",
        lastName: "Doe",
      }
]
const accountData = [
  {
    accountId: 1,
    users: [users[0], users[1]],
  },
  {
    accountId: 2,
    users: [users[2], users[3]],
  },
];



export function UserDropDown() {
    function toggleDropdown(e) {
        console.log(e)
    }
    return (
        <div className="dropdown">
        <button onClick={toggleDropdown} className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown button
        </button>
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item d-none bg-light" href="#">Action</a>
            <a className="dropdown-item d-none bg-light" href="#">Another action</a>
            <a className="dropdown-item d-none bg-light" href="#">Something else here</a>
        </div>
        </div>
    )
}
export function ManageAccounts() {
  return (
    <ul className="list-group">
      {accountData.map((account) => {
        return (
            <li className="list-group-item" key={account.accountId}>
                Account ID {account.accountId}
                <ul className="list-group">
                    {account.users.map((user) => {
                        return (
                        <li className="list-group-item" key={user.userId}>{user.firstName} {user.lastName}</li>
                        )
                    })}
                    <li className="list-group-item" key="addUser"><UserDropDown/></li>
                </ul>
            </li>
        )
      })}
    </ul>
  );
}
