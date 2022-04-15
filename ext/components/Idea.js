import React from "react";
import moment from 'moment'
import updateIdea from "@wasp/actions/updateIdea";
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';

function Idea (props) {
    console.log(props)
    function voteStateControler(id, state, action) {
        console.log(state)
        if (action === 0) {
            return {
                canUpdate: true,
                update: 0
            }
        }

        else if (! (id in state)) {
            state[id] = action
            props.setVoteState({...state})                
            return {
                canUpdate: true,
                update: action,
            }
        }

        const canUpdate = state[id] !== action

        if (canUpdate) {
            state[id] = action
            props.setVoteState({...state})
        }

        return {
            canUpdate: canUpdate,
            update: 2 * action
        }
    }

    async function handleVotesChange(action) {
        try {
            const {canUpdate, update} = voteStateControler(props.idea.id, props.voteState, action)
            if (canUpdate) {
                await updateIdea({
                    "ideaId": props.idea.id,
                    "data": {
                        update,
                        votes: props.idea.votes
                    }
                })
            }
            
        } catch (error) {

            window.alert(`Error while updating idea: ${error.message}`);

        }

    }

    function canShowButton(direction) {
        const isInReach = direction == -1 ? props.voteState[props.idea.id] > -1 : props.voteState[props.idea.id] < 1
        return !(props.idea.id in props.voteState) || isInReach
    }

    const twitterUrl = `https://twitter.com/${props.idea.twitterHandle}`

    const card = (
        <React.Fragment>
             <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minWidth: '100%', width: '100%' }}
                >
                <Grid item xs={11}>
                    <CardHeader
                        avatar={
                            <Avatar> {props.idea.twitterHandle[0].toUpperCase()} </Avatar>
                        }
                        title={
                            <a href={ twitterUrl}> {props.idea.twitterHandle} </a>
                        }
                        subheader={moment(props.idea.createdAt).format("YYYY-MM-DD")}
                    />
                    <CardContent>
                        <Grid container spacing={2} direction="row">
                            <Grid item xs={12}>
                                <Typography variant="h6" component="div">
                                    {props.idea.description}
                                </Typography>
                            </Grid>
                            <Grid item xs={3}>
                                <Chip label={props.idea.category.name} />
                            </Grid>
                            <Grid item xs={8}>
                                {props.idea.goals.map((goal, idx) => <Chip label={goal.name} key={idx} />)}
                            </Grid>
                        </Grid>               
                    </CardContent>
                    <CardActions>
                        <a href={props.idea.url} target="_blank" rel="noopener noreferrer">  
                            <Button size="small">Learn More</Button>          
                        </a>
                    </CardActions>
                </Grid>
            </Grid>
        </React.Fragment>
        
      );

    return (
        <div>
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">{card}</Card>
            </Box>
            <div>
                <h3>
                    {props.idea.description}
                </h3>

                <ul>
                    <li>
                        Votes:
                        {props.idea.votes}
                    </li>

                    {props.idea.url !== "" &&
                    <li>
                        <a href={props.idea.url}>
                            Link
                        </a>
                    </li>}
                </ul>

                { canShowButton(1) &&
                <button onClick={() => handleVotesChange(1)}>
                    Upvote
                </button>
                }
                { canShowButton(-1) &&
                <button onClick={() => handleVotesChange(-1)}>
                    DownVote
                </button>
                }
                { (props.showRefresh) &&
                <button onClick={() => handleVotesChange(0)}>
                    Refresh
                </button>
                }
            </div>
        </div>
    );

}
export default Idea;
