import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
/*Remember when it wouldn't go sideways and you added
This to the dependancies again? */
import { ScrollMenu, VisibilityContext } from 
'react-horizontal-scrolling-menu';

import BodyPart from './BodyPart';

//I COPIED ALL OF THIS!!!
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


//The horizontal scrollbar under the search button
//data.map is mapping, the box holds the props
//BodyPart is properties set through props
// HorizontalScrollbar has data from props

//Added Left Arrow Right Arrow to ScrollMenu so it would go sideways
const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {data.map((item) => (
            <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      )
    )}
  </ScrollMenu>
)
}

export default HorizontalScrollbar