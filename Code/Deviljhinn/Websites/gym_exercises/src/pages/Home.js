// useState is what I learned from LearnWeb3DAO
// Box is basically a div? idk.. I need to come back and google learn.
import React, { useState } from 'react'
import { Box } from '@mui/material';


/* I was getting an error when I tried to compile because the things
in the box below were not imported into the file... ()>_>))> */
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';


/* I made HeroBanner, SearchExercises, & Exercises
After Placing these in the Box, I went ahead and made 
Javascript Files for them in the ./components folder

the consts are moved here from SearchExercises because
they are used all across the app not just in that section */
const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([]);


//State are passed through props,
// could have used through react.topics api
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart} 
    />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}  
    />
  </Box>
  )
}

export default Home