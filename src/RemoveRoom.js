import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import DeleteIcon from '@mui/icons-material/Delete';
export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
 const arrClass=["תות","תפוח","אפרסמון","אתרוג","לימון","רימון","שקד"]
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >
      <ListItemButton>
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <DeleteIcon/>
        </ListItemIcon>
        <ListItemText primary="מחיקת חדר"  sx={{textAlign:'center'}}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <div>{arrClass.map((value) => (
        <ListItemButton sx={{ pl: 4 ,textAlign:'right'}}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={`חדר ${value}`} />
          </ListItemButton>
         ))}</div>
          
        </List>
      </Collapse>
    </List>
  );
}

{/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  {[1, 2, 3].map((value) => (
    <ListItem
      key={value}
      disableGutters
      secondaryAction={
        <IconButton aria-label="comment">
          <CommentIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`Line item ${value}`} />
    </ListItem>
  ))}
</List> */}
