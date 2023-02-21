import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { Box } from "@mui/system";

export default function NavListDrawer({ navegationLinks, component, setOpen }) {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navegationLinks.map((item) => (
            <ListItem
              disablePadding
              key={item.title}
            >
              <ListItemButton
                component={component}
                to={item.path}
                onClick={() => setOpen(false)}
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
