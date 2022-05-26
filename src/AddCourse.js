import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AddIcon from '@mui/icons-material/Add';
import SoftWare from './moduls/SoftWare';
import Autocomplete from '@mui/material/Autocomplete';
const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const [softwareArr, setSoftwareArr] = useState(["a","s"])
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <AddIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    הוספת קורס
                </Typography>
                <form className={classes.form} noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="שם הקורס"
                        name="name"
                        autoComplete="name"
                        autoFocus
                    />
                    <Typography style={{ textAlign: 'center' }}>
                        הוספת תוכנות לקורס
                    </Typography>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                       options={softwareArr}
                        sx={{ width: 300 }}
                        renderInput={(params) => (
                            <TextField {...params}  variant="standard" />)}
                    />
                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        הוספה
                    </Button>

                </form>
            </div>
        </Container>
    );
}