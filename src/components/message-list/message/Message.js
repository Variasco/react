import { Button, Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { format } from "date-fns";
import { useDispatch } from "react-redux";
import { deleteMessage } from "../../../store";

export const Message = ({ item, roomId }) => {
    const dispatch = useDispatch();
    const messagePos =
        item.author === "User" ? "message_right" : "message_left";

    return (
        <Box
            className={`${messagePos}`}
            sx={{
                width: "300px",
                backgroundColor: "#e6399b",
                display: "flex",
                borderRadius: "10px",
            }}
        >
            <Box sx={{ flexGrow: 1, p: "5px 0 5px 8px" }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    {item.author}
                </Typography>
                <Typography>{item.text}</Typography>
                <Typography sx={{ fontSize: 12 }} color="text.secondary">
                    {format(new Date(item?.date), "HH:mm")}
                </Typography>
            </Box>
            <Box sx={{ alignSelf: "flex-start", p: 0 }}>
                <Button
                    sx={{ minWidth: "24px", p: "5px" }}
                    onClick={() => dispatch(deleteMessage(roomId, item?.id))}
                >
                    <CloseIcon />
                </Button>
            </Box>
        </Box>
    );
};
