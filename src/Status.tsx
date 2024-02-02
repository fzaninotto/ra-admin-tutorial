import {
  Alert,
  Container,
  Divider,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
} from "@mui/material";

export const Status = () => (
  <Container sx={{ p: 5 }}>
    <Typography textAlign="center" variant="h4">
      Posters Galore Status
    </Typography>
    <List sx={{ px: 30, pt: 10, pb: 50 }}>
      <ListItem>
        <ListItemText>Web server</ListItemText>
        <ListItemSecondaryAction>
          <Alert severity="success" sx={{ width: 150 }}>
            Operational
          </Alert>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>Reverse Proxy</ListItemText>
        <ListItemSecondaryAction>
          <Alert severity="success" sx={{ width: 150 }}>
            Operational
          </Alert>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>Database</ListItemText>
        <ListItemSecondaryAction>
          <Alert severity="success" sx={{ width: 150 }}>
            Operational
          </Alert>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>Backups</ListItemText>
        <ListItemSecondaryAction>
          <Alert severity="error" sx={{ width: 150 }}>
            Error
          </Alert>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>Block Storage</ListItemText>
        <ListItemSecondaryAction>
          <Alert severity="success" sx={{ width: 150 }}>
            Operational
          </Alert>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>Message broker</ListItemText>
        <ListItemSecondaryAction>
          <Alert severity="success" sx={{ width: 150 }}>
            Operational
          </Alert>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>Worker 1</ListItemText>
        <ListItemSecondaryAction>
          <Alert severity="success" sx={{ width: 150 }}>
            Operational
          </Alert>
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>Worker 2</ListItemText>
        <ListItemSecondaryAction>
          <Alert severity="success" sx={{ width: 150 }}>
            Operational
          </Alert>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  </Container>
);
