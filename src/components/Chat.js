import { AccountCircle } from "@mui/icons-material";
import { ListItem, ListItemIcon, ListItemText } from "@mui/material";

export const Chat = ({ title, selected, listItemClickHandler }) => {
    return (
        <ListItem
            button={true}
            selected={selected}
            onClick={listItemClickHandler}
        >
            <ListItemIcon>
                <AccountCircle fontSize="large" />
            </ListItemIcon>
            <div>
                <ListItemText>{title}</ListItemText>
            </div>
        </ListItem>
    );
}