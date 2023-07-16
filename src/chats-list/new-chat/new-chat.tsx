import React, { useContext, useState } from "react";
import { Popover, List, ListItem } from "@mui/material";
import { Button } from "@Confrontend/ui-library";
import { ChatPartnerContext } from "../../utils/chat-partner.provider";

// TODO This should come from a prop or state.
const users = [
  { name: "hamed fa", googleId: "117947111923783876407" },
  { name: "Hamed Fatehi", googleId: "115203310049967371938" },
];

const NewChat = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { setChatPartner } = useContext(ChatPartnerContext);

  const handleClickOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListItemClick = (id: string) => {
    setChatPartner(id);
    setAnchorEl(null);
  };

  return (
    <div>
      {/* Consider moving Button and Popover into one component in @Confrontend/ui-library */}
      <Button onClick={handleClickOpen}>New Chat</Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 40, horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <List>
          {users.map((user) => (
            <ListItem
              key={user.googleId}
              onClick={() => handleListItemClick(user.googleId)}
            >
              {user.name}
            </ListItem>
          ))}
        </List>
      </Popover>
    </div>
  );
};

export default NewChat;
