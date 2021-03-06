import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Comment';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

// https://jsonplaceholder.typicode.com/todos/1

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <Container>
        <Grid>
            <List className={classes.root}>
            {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                <ListItem key={value} role={undefined} dense button onClick={handleToggle(value)}>
                    <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}
                    />
                    </ListItemIcon>
                    <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
                    <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="comments">
                        <DeleteIcon />
                    </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                );
            })}
            </List>
        </Grid>
        <Grid>
            <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                Add Task
            </Button>
        </Grid>

    </Container>
  );
}
