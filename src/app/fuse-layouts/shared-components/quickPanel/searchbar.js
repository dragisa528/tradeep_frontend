import React, { useState } from 'react';
import {Button,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';


// ul.topic-list > li {
//     width: 100%;
//     /* background: red; */
//     padding: 8px;
// }
// ul.topic-list {
//     /* background: green; */
//     width: 100%;
//     padding: 12px;
// }
//
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '50px',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    searchInput: {
        width: '98%',
        color: "#000",
        padding: 14,
        margin:5,
        marginBottom: theme.spacing(2),
        borderRadius: '0px',
        border: `1px solid ${theme.palette.grey[400]}`,
        outline: 'none',
        transition: 'border-color 0.3s ease-in-out',
        '&:focus': {
          borderColor: theme.palette.primary.main,
        },
      },
    backButton: {
      marginRight: theme.spacing(2),
    },
    topicList: {
      listStyle: 'none',
      padding: 12,
      margin: 0,
      width: '100% !important',
      '& > li': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        backgroundColor: '#fff',
        width: "100% !important",       
        marginBottom: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        border: `1px solid ${theme.palette.grey[400]}`,
        transition: 'border-color 0.3s ease-in-out',
        '&:hover': {
          borderColor: theme.palette.primary.main,
          cursor: 'pointer',
        },
        '& > button': {
          flexGrow: 1,
          marginRight: theme.spacing(2),
        },
      },
    },
    subtopicList: {
      padding: 0,
      margin: 0,
      '& > .subtopic-header': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        '& > h2': {
          margin: 0,
        },
      },
      '& > .subtopic-content': {
        '& > ul': {
          listStyle: 'none',
          padding: 0,
          margin: 0,
          '& > li': {
            padding: theme.spacing(1),
            marginBottom: theme.spacing(1),
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.palette.grey[400]}`,
            transition: 'border-color 0.3s ease-in-out',
            '&:hover': {
              borderColor: theme.palette.primary.main,
              cursor: 'pointer',
            },
          },
        },
      },
    },
  }));  

const topics = [
  {
    id: 1,
    name: 'Apple',
    subtopics: [
      { id: 1, name: 'Subtopic 1.1' },
      { id: 2, name: 'Subtopic 1.2' },
      { id: 3, name: 'Subtopic 1.3' },
    ],
  },
  {
    id: 2,
    name: 'Orange',
    subtopics: [
      { id: 4, name: 'Subtopic 2.1' },
      { id: 5, name: 'Subtopic 2.2' },
    ],
  },
  {
    id: 3,
    name: 'Cherry',
    subtopics: [
      { id: 6, name: 'Subtopic 3.1' },
      { id: 7, name: 'Subtopic 3.2' },
      { id: 8, name: 'Subtopic 3.3' },
      { id: 9, name: 'Subtopic 3.4' },
    ],
  },
];

function ListWithSearch() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTopic, setSelectedTopic] = useState(null);

  const filteredTopics = topics.filter((topic) =>
    topic.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  const handleBackClick = () => {
    setSelectedTopic(null);
  };

  const handleClearClick = () => {
    setSearchTerm('');
  };
  return (
    <div className={classes.root}>
    <TextField
        className={classes.searchInput}
        placeholder="Search topics..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                {searchTerm && (
                <IconButton onClick={handleClearClick}>
                    <ClearIcon />
                </IconButton>
                )}
                <IconButton>
                <SearchIcon />
                </IconButton>
            </InputAdornment>
            ),
            classes: {
            input: classes.input,
            adornedEnd: classes.adornedEnd
            },
            disableUnderline: true,
        }}
        />

     <ul className="topic-list" style={{width:'100%'}}>
        {selectedTopic ? (
            <li className="subtopic-list">
            <div className="subtopic-header">
                <Button className={classes.backButton} onClick={handleBackClick}>{selectedTopic.name}</Button>
   
            </div>
            <div className="subtopic-content">
            <ul className="topic-list" style={{width:'100%'}}>
                {selectedTopic.subtopics.map((subtopic) => (
                    <li 
                    style={{display:"flex",justifyContent:"space-between",width:"100%",padding:"10px"}}
                    key={subtopic.id}>{subtopic.name}</li>
                ))}
                </ul>
            </div>
            </li>
        ) : (
            filteredTopics.map((topic) => (
            <li style={{display:"flex",justifyContent:"space-between",width:"100%",padding:"10px"}} key={topic.id} onClick={() => handleTopicClick(topic)}>
                <span>
                {topic.name}
                </span>
                <span>
                    0/4
                </span>
            </li>
            ))
        )}
    </ul>

    </div>
  );
}

export default ListWithSearch;
