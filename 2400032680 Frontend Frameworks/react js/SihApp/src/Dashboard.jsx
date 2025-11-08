import { useNavigate } from "react-router-dom";
import React from "react";
import {
  Box, Card, CardContent, Typography, Grid, Avatar, Button, List, ListItem, ListItemAvatar,
  ListItemText, Paper, IconButton, Badge, AppBar, Toolbar, InputBase
} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SearchIcon from '@mui/icons-material/Search';
import AssessmentIcon from '@mui/icons-material/Assessment';

const activityData = [
  { type: 'Certification', title: 'AWS Cloud Practitioner', date: '2025-01-15', duration: '40 hours', description: 'Completed AWS Cloud Practitioner certification course.' },
  { type: 'Workshop', title: 'React Advanced Patterns', date: '2025-01-10', duration: '8 hours', description: 'Advanced React patterns and performance optimization.' },
  { type: 'Seminar', title: 'AI in Healthcare', date: '2025-01-08', duration: '3 hours', description: 'Seminar on artificial intelligence applications in healthcare.' },
];

const notifications = [
  { title: "Activity Approved", desc: "Your AWS Cloud Practitioner certification has been approved!", icon: <CheckCircleIcon color="success" />, color: "success" },
  { title: "Review in Progress", desc: "React Advanced Patterns workshop is under review", icon: <PendingActionsIcon color="warning" />, color: "warning" },
  { title: "New Feature", desc: "You can now upload multiple files for each activity", icon: <TrendingUpIcon color="primary" />, color: "primary" },
];

function Dashboard() {
  const email = localStorage.getItem('loggedInEmail');
  const navigate = useNavigate(); // <-- Yeh line IMPORTANT hai!

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#f8fafc" }}>
      {/* Header */}
      <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: "#eaeaea" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Box display="flex" alignItems="center">
            {/* Left Avatar with initial */}
            <Avatar sx={{ bgcolor: "#2684ff", mr: 2 }}>
              {email ? email[0].toUpperCase() : "S"}
            </Avatar>
            <Typography variant="h6" color="primary" sx={{ fontWeight: 700 }}>Student Portal</Typography>
          </Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            Welcome back,&nbsp;
            <span style={{ fontWeight: 700 }}>{email || "Student"}</span>
            <Typography variant="caption" ml={2} color="GrayText">
              Ready to track your activities today?
            </Typography>
          </Typography>
          <Box display="flex" alignItems="center" gap={2}>
            <Paper component="form" sx={{ display: 'flex', alignItems: 'center', width: 180, ml: 1 }}>
              <InputBase sx={{ ml: 1, flex: 1, fontSize: 15 }} placeholder="Search activities..." />
              <IconButton type="submit" sx={{ p: '6px' }} disabled>
                <SearchIcon />
              </IconButton>
            </Paper>
            <IconButton>
              <Badge badgeContent={2} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {/* Right Avatar with email initial, now CLICKABLE */}
            <Avatar
              sx={{ bgcolor: "#43cea2", cursor: "pointer" }}
              onClick={() => navigate('/profile')}
              title="Open Profile"
            >
              {email ? email[0].toUpperCase() : "S"}
            </Avatar>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Dashboard Cards */}
      <Grid container spacing={2} sx={{ mt: 3, px: 6 }} justifyContent="center">
        <Grid item xs={6} sm={3}>
          <Card elevation={1}>
            <CardContent>
              <Typography color="GrayText" variant="body2">Total Activities</Typography>
              <Typography variant="h4" sx={{ mt: 1 }}>5</Typography>
              <Box mt={1} color="success.main">+12% from last month</Box>
              <Avatar sx={{ bgcolor: "#2684ff", mt: 1, width: 34, height: 34 }}><AssessmentIcon /></Avatar>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card elevation={1}>
            <CardContent>
              <Typography color="GrayText" variant="body2">Approved Activities</Typography>
              <Typography variant="h4" sx={{ mt: 1 }}>3</Typography>
              <Box mt={1} color="success.main">+8% from last month</Box>
              <Avatar sx={{ bgcolor: "#43b043", mt: 1, width: 34, height: 34 }}><CheckCircleIcon /></Avatar>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card elevation={1}>
            <CardContent>
              <Typography color="GrayText" variant="body2">Pending Activities</Typography>
              <Typography variant="h4" sx={{ mt: 1 }}>2</Typography>
              <Box mt={1} color="warning.main"></Box>
              <Avatar sx={{ bgcolor: "#ffd700", mt: 1, width: 34, height: 34 }}><PendingActionsIcon /></Avatar>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card elevation={1}>
            <CardContent>
              <Typography color="GrayText" variant="body2">This Week</Typography>
              <Typography variant="h4" sx={{ mt: 1 }}>0</Typography>
              <Box mt={1} color="primary.main">+3 new activities</Box>
              <Avatar sx={{ bgcolor: "#aa38ef", mt: 1, width: 34, height: 34 }}><TrendingUpIcon /></Avatar>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Main Content: Activities & Notifications */}
      <Grid container spacing={2} sx={{ mt: 2, px: 6 }}>
        {/* Recent Activities Table */}
        <Grid item xs={12} md={8}>
          <Paper elevation={2} sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="h6" mb={1}>Recent Activities</Typography>
            <Typography variant="body2" color="gray" mb={2}>
              Track and manage your learning activities
            </Typography>
            <Box component="table" sx={{ width: "100%" }}>
              <thead>
                <tr>
                  <th align="left">TYPE</th>
                  <th align="left">TITLE</th>
                  <th align="left">DATE</th>
                  <th align="left">DURATION</th>
                </tr>
              </thead>
              <tbody>
                {activityData.map((act, i) => (
                  <tr key={i}>
                    <td style={{ padding: "6px 10px" }}>{act.type}</td>
                    <td style={{ padding: "6px 10px" }}>{act.title}
                      <br />
                      <Typography variant="caption" color="gray">{act.description}</Typography>
                    </td>
                    <td style={{ padding: "6px 10px" }}>{act.date}</td>
                    <td style={{ padding: "6px 10px" }}>{act.duration}</td>
                  </tr>
                ))}
              </tbody>
            </Box>
          </Paper>
        </Grid>
        {/* Recent Notifications */}
        <Grid item xs={12} md={4}>
          <Paper elevation={2} sx={{ p: 2, borderRadius: 3 }}>
            <Typography variant="h6" mb={1}>Recent Notifications</Typography>
            <List>
              {notifications.map((notif, idx) => (
                <ListItem key={idx} alignItems="flex-start" divider>
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: "white" }}>{notif.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={<b>{notif.title}</b>}
                    secondary={notif.desc}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
      {/* +Log Activity Floating Button */}
      <Button variant="contained" sx={{
        position: "fixed",
        right: 48,
        bottom: 48,
        bgcolor: "#2684ff", fontWeight: 600, borderRadius: 2, px: 3, py: 1.2, boxShadow: 3
      }}>
        + Log Activity
      </Button>
    </Box>
  );
}

export default Dashboard;
