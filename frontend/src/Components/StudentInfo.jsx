import {
  Box,
  Card,
  Typography,
  Button,
  Grid,
  TableContainer,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  Paper,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { UserAuth } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getQuote } from "inspirational-quotes";

const StudentInfo = () => {
  const { state, get_userList, get_userIssue } = useContext(UserAuth);

  const navigate = useNavigate();

  useEffect(() => {
    get_userList();
  }, [get_userList]);

  useEffect(() => {
    get_userIssue();
  }, [get_userIssue]);

  const logout = async (req, res) => {
    localStorage.removeItem("token");
    state.isLogin = false;
    navigate("/");
    toast.success("logged out successfully");
  };

  return (
    <section>
      <Grid container justifyContent="center" alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              minWidth: 400,
              maxWidth: "90%", // Set the maximum width to 90% of the screen
              padding: "20px",
              margin: "30px auto", // Center the card horizontally and add vertical margin
              boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Changed the opacity to 0.9 for better readability
              backdropFilter: "blur(8px)",
              // Media query for smaller screens (phones)
              "@media (max-width: 600px)": {
                minWidth: "80%", // Set the minimum width to 80% of the screen
              },
            }}
          >
            <Typography variant="h6" sx={{ textAlign: "center" }}>
              Student-Info:
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 0.5,
                marginTop: 2,
              }}
            >
              <Typography variant="body1">
                Name: {state.studentInfo.student_name}
              </Typography>
              <Typography variant="body1">
                Roll No.: {state.studentInfo.rollNo}
              </Typography>
              <Typography variant="body1">
                Year: {state.studentInfo.student_year}
              </Typography>
              <Typography variant="body1">
                Room No.: {state.studentInfo.student_room}
              </Typography>
              <Typography variant="body1">
                Email: {state.studentInfo.student_email}
              </Typography>
              <Button
                variant="contained"
                color="primary" // Changed to a primary color for better visibility
                sx={{
                  marginY: 2,
                  backgroundImage:
                    "linear-gradient(to right, darkblue, lightblue)",
                }}
                onClick={logout}
              >
                Sign Out
              </Button>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={5}>
          <Card
            sx={{
              padding: 2,
              boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)",
              borderRadius: "8px",
              backgroundColor: "rgba(255, 255, 255, 0.9)", // Changed the opacity to 0.9 for better readability
              backdropFilter: "blur(8px)",
            }}
          >
            <Typography
              variant="h6"
              sx={{ textAlign: "center", marginBottom: 1 }}
            >
              Thought for the day:
            </Typography>
            <Typography
              variant="body1"
              sx={{ textAlign: "center", marginBottom: 1 }}
            >
              {getQuote().text}
            </Typography>
            <Typography variant="body2" sx={{ textAlign: "right" }}>
              - {getQuote().author}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <Grid
        item
        xs={12}
        sm={8}
        md={10}
        component={Paper}
        elevation={12}
        square
        sx={{ margin: 4 }}
      >
        <React.Fragment>
          <Typography variant="h6" sx={{ marginBottom: 2 }}>
            Recent Complaints
          </Typography>
          <TableContainer sx={{ maxHeight: "60vh" }}>
            <Table size="small" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Token ID</TableCell>
                  <TableCell>Department</TableCell>
                  <TableCell>Detail</TableCell>
                  <TableCell>Complaint Date</TableCell>
                  <TableCell>Preferred Date</TableCell>
                  <TableCell>TimeSlot-From</TableCell>
                  <TableCell>TimeSlot-To</TableCell>
                  <TableCell align="right">Issue Resolved ?</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {state.issueInfo?.map((issue) => (
                  <TableRow key={issue.token}>
                    <TableCell>{issue.token}</TableCell>
                    <TableCell>{issue.department}</TableCell>
                    <TableCell>{issue.detail}</TableCell>
                    <TableCell>{issue.issueDate}</TableCell>
                    <TableCell>{issue.preferredDate}</TableCell>
                    <TableCell>{issue.preferredTimeFrom}</TableCell>
                    <TableCell>{issue.preferredTimeTo}</TableCell>
                    <TableCell align="right">{issue.issueResolved}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </React.Fragment>
      </Grid>
    </section>
  );
};

export default StudentInfo;
