import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
//import BooksThumbnail from '../../atoms/Booksthumbnails';
import Buttons from '../../atoms/Buttons';
import TextTypography from '../../atoms/Typography';
import SecondarySelectedTab from '../../molecules/SecondaryTabs';

type SingleBook = {
    title: string;
    moto: string;
    author: string;
    src: string;
    content?: React.ReactNode;
}

interface SingleBookProps {
    style?: React.CSSProperties;
    books: SingleBook;
}

const SingleBook = (props: SingleBookProps) => {
    const [books, setBooks] = useState();
    
    const getBooksData = async () => {
      
    }
    useEffect(() => {
        getBooksData();
    }, []);


    const handleReadMe = () => {
    }

    const handleByeMe = () => {
    }

    const handleKindle = () => {
    }

  return (
    <div>
        <Grid container>
            <Grid container>
                <Grid item direction={"column"}>
                    <TextTypography variant='h1'>{props.books.title}</TextTypography>
                    <TextTypography variant='h1'>{props.books.moto}</TextTypography>
                    <TextTypography variant='h1'>{props.books.author}</TextTypography>
                    <Grid item style={props.style}>
                        <Buttons onClick={handleReadMe}>{"Read Me"}</Buttons>
                        <Buttons onClick={handleByeMe}>{"Bye Me"}</Buttons>
                        <Buttons onClick={handleKindle}>{"Send to kindle"}</Buttons>
                    </Grid>
                </Grid>
                <Grid item>
                </Grid>
            </Grid>
            <Grid container>
                <SecondarySelectedTab firstTab={"Synopsis"} secondTab={"Who it is for"}  thirdTab={"About the author"} />
            </Grid>
        </Grid>
    </div>
  )
}

export default SingleBook