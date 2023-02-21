import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Box } from "@mui/system";

export default function NavListDrawer({ navLinks }) {
  return (
    <Box sx={{ width: 250 }}>
      {/* <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List>
      </nav>
      <Divider /> */}
      <nav>
        <List>
          {navLinks.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
            >
              <ListItemButton
                component="a"
                href={item.path}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
