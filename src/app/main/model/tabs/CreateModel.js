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
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="m-12 flex flex-col md:overflow-hidden border border-1 rounded-lg"
      >
        <DialogContent classes={{ root: 'p-24' }}>
          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">account_circle</Icon>
            </div>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Agent name"
                  id="name"
                  error={!!errors.name}
                  helperText={errors?.name?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="nickname"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Model"
                  id="nickname"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="phone"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Asset1"
                  id="phone"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="email"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Asset2"
                  id="email"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="company"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Timeframe1"
                  id="company"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="jobTitle"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Timeframe2"
                  id="jobTitle"
                  name="jobTitle"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="jobTitle"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Features"
                  id="jobTitle"
                  name="jobTitle"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="address"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Reward function"
                  id="address"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="address"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Window Size"
                  id="address"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="birthday"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  id="birthday"
                  label="Features Selected"
                  type="date"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="address"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Set TP"
                  id="address"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">home</Icon>
            </div>
            <Controller
              control={control}
              name="address"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Set SL"
                  id="address"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </div>

          {/* <div className="flex">
            <div className="min-w-48 pt-20">
              <Icon color="action">note</Icon>
            </div>
            <Controller
              control={control}
              name="notes"
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Notes"
                  id="notes"
                  variant="outlined"
                  multiline
                  rows={5}
                  fullWidth
                />
              )}
            />
          </div> */}
        </DialogContent>

        <DialogActions className="justify-between p-4 pb-16">
          <div className="px-16">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Continue
            </Button>
          </div>
          <div className="px-16">
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              disabled={_.isEmpty(dirtyFields) || !isValid}
            >
              Not now
            </Button>
          </div>
        </DialogActions>
      </form>
    </motion.div>
  );
}

export default DashboardTab;
