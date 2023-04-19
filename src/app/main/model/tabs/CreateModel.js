import { motion } from 'framer-motion';
import { DialogContent, Icon, Typography, DialogActions } from '@material-ui/core';
import { useState, useCallback, useEffect } from 'react';
import FuseUtils from '@fuse/utils/FuseUtils';
import { yupResolver } from '@hookform/resolvers/yup';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';


import _ from '@lodash';
import * as yup from 'yup';
import DrawflowComponent from './DrawflowComponent';
import {
  removeContact,
  updateContact,
  addContact,
  closeNewModelDialog,
  closeEditModelDialog,
} from '../store/modelSlice';


const defaultValues = {
  id: '',
  name: '',
  lastName: '',
  nickname: '',
  company: '',
  jobTitle: '',
  email: '',
  phone: '',
  address: '',
  birthday: '',
  notes: '',
};

const schema = yup.object().shape({
  name: yup.string().required('You must enter a name'),
});

function DashboardTab() {
  const dispatch = useDispatch();

  const { control, watch, reset, handleSubmit, formState, getValues } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;

  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const [userMenu, setUserMenu] = useState(null);
  const [pageState, setPageState] = useState(0);

  const userMenuClick = (event) => {
    setUserMenu(event.currentTarget);
  };

  const userMenuClose = () => {
    setUserMenu(null);
  };

  function onSubmit(data) {
    dispatch(addContact(data));
  }

  return (
    <motion.div
      className="flex flex-wrap justify-left"
      variants={container}
      initial="hidden"
      animate="show"
    >
     <DrawflowComponent/>
    </motion.div>
    
  );
}

export default DashboardTab;
