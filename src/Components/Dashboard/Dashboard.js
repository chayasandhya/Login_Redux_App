import React from "react";

import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";

import "./Dashboard.css";
import { connect } from "react-redux";

const useStyles = makeStyles({
  table: {
    //background: "#e3afbc",
    background: "#d6b4bb",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  head: {
    background: "#5d001e",
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  cell: {
    fontWeight: "bold",
  },
  body: {
    fontSize: 14,
  },
});

function Dashboard({ employeeList }) {
  const classes = useStyles();
  return (
    <div className="dashboard_container">
      <Table className={classes.table}>
        <TableHead className={classes.head}>
          <TableRow>
            <TableCell className={classes.head}>Id</TableCell>
            <TableCell className={classes.head}>Name</TableCell>
            <TableCell className={classes.head}>Age</TableCell>
            <TableCell className={classes.head}>Gender</TableCell>
            <TableCell className={classes.head}>E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employeeList.map((each) => {
            return (
              <TableRow key={each.id}>
                <TableCell className={classes.cell}>{each.id}</TableCell>
                <TableCell className={classes.cell}>{each.name}</TableCell>
                <TableCell className={classes.cell}>{each.age}</TableCell>
                <TableCell className={classes.cell}>{each.gender}</TableCell>
                <TableCell className={classes.cell}>{each.email}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { employeeList: state.EmployeeReducer.user };
};

export default connect(mapStateToProps)(Dashboard);
