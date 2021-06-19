import React from 'react'
import { Button, Grid, makeStyles, Typography, TextField } from '@material-ui/core'


const useStyles = makeStyles(() => ({
    container: {
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#181721',
    },
    loginContainer:{
        maxWidth: 700,
        padding: 30,
    }, 
    signIn:{
        padding: 30,
        background: '#E9E9E9',

    },
    singUp:{
        padding: 30,
        background: '#67DABB',
        color: '#181721',
    },
    textSingIn:{
        marginBottom: 20,
        fontFamily: 'Merriweather Sans'
    },
    textField:{
        marginBottom: 15,
    },
    textManage:{
        marginBottom: 20,
    },
    btnIn:{
        background: '#67dabb',
        color: '#181721',
        '&:hover': {
            backgroundColor: '#62b8a1' ,
        },
    },
    btnUp:{
        color: '#181721',
        borderColor: '#181721',
    },
    textfield: {
        '& label.Mui-focused': {
          color: '#181721',
        },
        '& .MuiFilledInput-underline:after': {
          borderBottomColor: '#181721',
        },

    },

}));

const Login = () => {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Grid 
                container 
                direction="row"
                className={classes.loginContainer}
            >
                <Grid 
                    container item
                    xs={12} sm={6} 
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className={classes.singUp}
                >
                    <Typography variant="h4" className={classes.textSingIn}>
                        Hello, Friend!
                    </Typography>
                    <Typography variant="body2" className={classes.textManage}>
                        Manage your projets with us
                    </Typography>
                    <Button 
                        variant="outlined" 
                        classes={{
                          outlined: classes.btnUp  
                        }}
                    > 
                        Sing Up
                    </Button>
                </Grid>

                <Grid 
                    container item
                    xs={12} sm={6} 
                    direction="column"
                    alignItems="center"
                    justify="center"
                    className={classes.signIn}
                >
                    <Typography variant="h4" className={classes.textSingIn}>
                        Sing in
                    </Typography>   
                    <TextField 
                        id="filled-basic" 
                        label="Email" 
                        variant="filled" 
                        className={classes.textField}
                        classes={{
                            root: classes.textfield
                        }}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="filled"
                        className={classes.textField}
                        classes={{
                            root: classes.textfield
                        }}
                    />
                    <Button 
                        variant="contained" 
                        classes={{
                            root: classes.btnIn
                        }}
                    > 
                        Sing in
                    </Button>

                </Grid>
            </Grid>
        </div>    
    );
}
 
export default Login;