import React from "react";
import "./QuestMain.css";
import Card from "@material-ui/core/Card";
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const QuestMain = props => 
    <div className="quest_main">
        <Card>
            <CardMedia 
                    className="c_media"
                    image="https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg"
                    title="Coffee Thing"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            Coffee is Great!
                        </Typography>
                        <Typography component="p">
                            This drink is pretty cool. Do you like it warm or cold?
                            Who cares!
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" href="#" target="_blank">
                            Go To Course
                        </Button>
                    </CardActions>
        </Card>
    </div>

export default QuestMain;