import * as React from 'react';
import { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Dialog, DialogContent, DialogTitle, Grid } from '@mui/material';
import { getDetails } from '../Api/api';



const BasicCard = ({ match }) => {

  

    const [open, setOpen] = useState(false);

    const handleClick = (id) => {

        getDetails(id).then((data) => { handleOpen(); }).catch((error) => alert("Could not load data"))
    };

    const handleOpen = () => {

        setOpen(true)
    };
    const handleClose = () => {

        setOpen(false)
    };
    const getDialog = () => {
        return (<> <Dialog open={open} onClose={handleClose}>
            <DialogTitle>
                <Typography>{match.name}</Typography>
            </DialogTitle>
            <DialogContent dividers sx={{ display: 'inlineflex', justifyContent: 'space-between' }} >
                <Typography gutterBottom>
                    {match.score[0].inning}
                </Typography>
                <hr/>
                <Typography gutterBottom>
                    Run-{match.score[0].r}
                </Typography>
                <Typography gutterBottom>
                    Wicket-{match.score[0].w}
                </Typography>
                <Typography gutterBottom>
                    Out-{match.score[0].o}
                </Typography>

            </DialogContent>
            <DialogContent dividers sx={{ display: 'inlineflex', justifyContent: 'space-between' }} >
                <Typography gutterBottom>
                    {match.score[1] !== undefined ? match.score[1].inning : ""}
                </Typography>
                <hr/>
                <Typography gutterBottom>
                    Run-{match.score[1] !== undefined ? match.score[1].r : ""}
                </Typography>
                <Typography gutterBottom>
                    Wicket-{match.score[1] !== undefined ? match.score[1].w : ""}
                </Typography>
                <Typography gutterBottom>
                    Out-{match.score[1] !== undefined ? match.score[1].o : ""}
                </Typography>

            </DialogContent>


            <DialogContent>
                <Typography>
                    {match.status}
                </Typography>
            </DialogContent>

        </Dialog> </>)
    };


    const getCard = () => {

        return (<Card sx={{ minWidth: 275 }} variant="outlined" style={{ margin: 5 }}>
            {getDialog()}
            <CardContent>
                <Grid container justifyContent='space-evenly' alignItems="center" spacing={4}>
                    <Grid item>
                        <img alt="Team1" style={{ width: 45 }} src={(match.teamInfo[0]) !== undefined ? (match.teamInfo[0].img) : ("")} />
                        <Typography variant="h5">{match.teams[0]}</Typography>

                    </Grid>
                    <Grid item >

                        <img alt="vs" style={{ width: 85 }} src={require("../img/vs.png")} />
                    </Grid>
                    <Grid item>
                        <img alt="Team2" style={{ width: 45 }} src={(match.teamInfo[1]) !== undefined ? (match.teamInfo[1].img) : ("")} />
                        <Typography variant="h5">{match.teams[1]}</Typography>
                    </Grid>
                </Grid>
            </CardContent>
            <CardContent>
                <span style={{ color: "Blue" }}>Venue:</span> {match.venue}
            </CardContent>
            <CardActions>

                <Grid container justifyContent='space-evenly'  >
                    <Button item variant="contained" color="primary" onClick={
                        () => {
                            handleClick(match.id)
                        }
                    }>Show Details</Button>
                    <Button item variant="contained" color="primary">Start Time {match.dateTimeGMT}</Button>

                </Grid>

            </CardActions>
        </Card>)
    }

    return (

        <React.Fragment>
            {getCard()}
            {getDialog()}
        </React.Fragment>

    )

};

export default BasicCard;
