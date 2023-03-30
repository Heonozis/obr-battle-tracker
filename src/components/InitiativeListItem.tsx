import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useState } from 'react'

import { InitiativeItem } from "../types";

type InitiativeListItemProps = {
  initiative: InitiativeItem;
  playerRole: string;
  onCountChange: (count: string) => void;
  onHealthChange: (count: number) => void;
};

export function InitiativeListItem({
  initiative,
  playerRole,
  onCountChange,
  onHealthChange,
}: InitiativeListItemProps) {

  playerRole = playerRole || 'PLAYER';

  const [diff, setDiff] = useState(0);

  const handleHeal = () => {
    onHealthChange(initiative.hp + diff)
    setDiff(0)
  }

  const handleDamage = () => {
    onHealthChange(initiative.hp - diff)
    setDiff(0)
  }

  return (
    <ListItem
      key={initiative.id}
      secondaryAction={
        <>
          <TextField
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              width: 38,
            }}
            value={initiative.count}
            onChange={(e) => {
              const newCount = e.target.value;
              onCountChange(newCount);
            }}
          />
          <TextField
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              width: 38,
              display: playerRole === 'PLAYER' ? 'none' : undefined
            }}
            value={initiative.hp}
            onChange={(e) => {
              const newHealth = parseInt(e.target.value);
              onHealthChange(newHealth);
            }}
          />
          <TextField
            variant="standard"
            InputProps={{ disableUnderline: true }}
            sx={{
              width: 38,
              display: playerRole === 'PLAYER' ? 'none' : undefined
            }}
            value={diff}
            onChange={(e) => {
              const change = parseInt(e.target.value) || 0;
              setDiff(change);
            }}
          />
          <ButtonGroup
            orientation="vertical"
            aria-label="vertical outlined button group"
            sx={{ 
              height: 40,
              display: playerRole === 'PLAYER' ? 'none' : undefined

            }}
          >
            <Button key="one" variant="text" color="success" sx={{ height: 20, borderRadius: '4px' }} onClick={handleHeal}>+</Button>
            <Button key="one" variant="text" color="error" sx={{ height: 20, borderRadius: '4px' }} onClick={handleDamage}>-</Button>
          </ButtonGroup>

        </>

      }
      divider
      selected={initiative.active}
      sx={{
        pr: "64px",
      }}
    >
      <ListItemText primary={initiative.name} sx={{
        color: initiative.hp < 1 ? '#ff0000' : '',
        textDecoration: initiative.hp < 1 ? 'line-through' : ''
      }} />
    </ListItem>
  );
}
