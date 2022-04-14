import { AccountCircle } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export const Chat = ({ title, selected, deleteChatByName }) => {
    return (
        <ListItem data-testid="chat-wrapper" button selected={selected}>
            <ListItemIcon>
                <AccountCircle fontSize="large" />
            </ListItemIcon>
            <ListItemText data-testid="title">{title}</ListItemText>
            <Button
                data-testid="button"
                sx={{ margin: 0, padding: 0, minWidth: "24px" }}
                onClick={() => deleteChatByName(title)}
            >
                <DeleteIcon />
            </Button>
        </ListItem>
    );
};
