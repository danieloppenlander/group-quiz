import React from 'react'
import { Card, Typography } from '@mui/joy'
import Grid from '@mui/joy/Grid';
import Button from '@mui/joy/Button'
import studyasset from '../../assets/studying.jpg'

type Props = {}

export default function Landing({}: Props) {
    const CARDHEIGHT = 160
  return (
    <>
        <img src={studyasset} style={{width:'100%', borderRadius:10}} />
        <Typography level='h1' lineHeight={2}>
            More Efficient Group Studying.
        </Typography>
        <Typography level='h5' lineHeight={1.5}>
            Enhance your group study sessions like never before. Group Quiz enables you to create quizzes as a group without seeing what others are adding.
        </Typography>
        <br/>
        <Grid container spacing={2} sx={{flexGrow: 1}}>
            <Grid xs={4}>
                <Card variant="outlined" style={{minHeight:CARDHEIGHT}}>
                    <Typography level="h4">Create your group</Typography>
                    <Typography level="body2">
                        Quizzes are contained to groups. The group leader can create new quizzes that anyone in the group can contribute questions to.
                    </Typography>
                </Card>
            </Grid>
            <Grid xs={4}>
                <Card variant="outlined" style={{minHeight:CARDHEIGHT}}>
                    <Typography level="h4">Add Questions</Typography>
                    <Typography level="body2">
                        Anyone in your group can add questions to the quizzes in that group. Only the group leader can see the questions being added and can remove questions at their discresion.
                    </Typography>
                </Card>
            </Grid>
            <Grid xs={4}>
                <Card variant="outlined" style={{minHeight:CARDHEIGHT}}>
                    <Typography level="h4">Release the Quiz</Typography>
                    <Typography level="body2">
                        No one in the group besides the leader can see the questions being added until the group leader releases the quiz. This provides the benefit of not knowing exactly what type of questions will be on the quiz before taking it, just like a real exam.
                    </Typography>
                </Card>
            </Grid>
            <Grid xs={12} style={{display:'flex', flexDirection:'column', alignItems:'center', textAlign: 'center'}}>
                <br/>
                <Typography level='h2'>
                    Ready to transform your group study sessions?
                </Typography>
                <br/>
                <Button size='lg'>Get Started</Button>
            </Grid>
        </Grid>
    </>
  )
}