/* useState enables us to maintain a variable, initializes
the React Hook effects rendered html in real time.

useEffect allows us to automatically run code when the page
is first loaded, fetchs data from a server or blockchain

@mui/material is our UI components */
import React, { useEffect, useState } 
from 'react';
import { Box, Button, Stack, TextField, 
Typography } from '@mui/material';
//fetchData function import from utils
import { exerciseOptions, fetchData } from 
'../utils/fetchData';
import HorizontalScrollbar from 
'./HorizontalScrollbar';

/* This is mapping for SearchExercises
using useState to change the app in 
real time with the data we pass in arrays and strings

All these come from Home.js */
const SearchExercises = ({ setExercises, 
bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);

            setBodyParts(['all', ...bodyPartsData]);
        }

        fetchExercisesData();
    }, [])
/*This is where we import fetchDAta function
Website url is the string to our database, 
The string after is to our function 
which calls for our private key to use the DB */
    const handleSearch = async () => {
        if(search) {
           const exercisesData = await fetchData
           ('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

//This is where we expand on the search functionality of exercisesData
            const searchedExercises = exercisesData.filter(
                (exercise) => exercise.name.toLowerCase().includes(search)
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            );

            setSearch('')
            setExercises(searchedExercises);
        }
}

/* This return function returns our styled text */
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
        <Typography fontWeight={700} sx={{
        fontSize: { lg: '44px', xs: '30px'}}}
        mb="50px" textAlign="center">
        Awesome Exercises You <br />
        Should Know
        </Typography>
        <Box position="relative" mb="72px">
            <TextField
            sx={{
                input: { 
                    fontWeight: '700',
                    border: 'none', 
                    borderRadius: '4px'
                },
                width: { lg: '800px', xs: '350px'},
                backgroundColor: '#fff',
                borderRadius: '40px'
            }}
            height="76px"
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
           />
            <Button className="search-btn"
                sx={{
                    bgcolor: '#FF2625',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80px'},
                    fontSize: {lg: '20px', xs: '14px'},
                    height: '56px',
                    position: 'absolute',
                    right: '0'
                }}
                onClick={handleSearch}
            >
                search
            </Button>
        </Box>
        <Box sx={{ position: 'relative', width: '100%', p: '20px'}}>
            <HorizontalScrollbar data={bodyParts} 
            bodyPart={bodyPart} setBodyPart=
            {setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises