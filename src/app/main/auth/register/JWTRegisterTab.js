import { yupResolver } from '@hookform/resolvers/yup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { submitRegister } from 'app/auth/store/registerSlice';
import * as yup from 'yup';
import _ from '@lodash';

import { useMutation } from '@apollo/client';
import { REGISTER_MUTATION } from '@graphql/mutations'

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  username: yup.string().required('You must enter first name'),
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password1: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  password2: yup.string().oneOf([yup.ref('password1'), null], 'Passwords must match'),
});

const defaultValues = {
  username: '',
  email: '',
  password1: '',
  password2: '',
};

function JWTRegisterTab(props) {
  const dispatch = useDispatch();
  const authRegister = useSelector(({ auth }) => auth.register);

  const [signUp] = useMutation(REGISTER_MUTATION);

  const { control, formState, handleSubmit, reset, setError } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    console.log("resgister:::", authRegister?.errors);
    Object.values(authRegister?.errors)[0]?.forEach((error) => {
      setError(Object.keys(authRegister?.errors)[0], {
        type: 'manual',
        message: error.message,
      });
    });
  }, [authRegister.errors, setError]);

  function onSubmit(model) {
    dispatch(submitRegister(signUp, model));
  }

  return (
    <div className="w-full">
      <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-16 mx-20"
              type="text"
              label="User name"
              error={!!errors.username}
              helperText={errors?.username?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon className="text-20" color="action">
                      person
                    </Icon>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-16 mx-20"
              type="text"
              error={!!errors.email}
              helperText={errors?.email?.message}
              label="Email"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon className="text-20" color="action">
                      email
                    </Icon>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
            />
          )}
        />

        <Controller
          name="password1"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-16 mx-20"
              type="password"
              label="Password"
              error={!!errors.password1}
              helperText={errors?.password1?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon className="text-20" color="action">
                      vpn_key
                    </Icon>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
            />
          )}
        />

        <Controller
          name="password2"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-16 mx-20"
              type="password"
              label="Confirm Password"
              error={!!errors.password2}
              helperText={errors?.password2?.message}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <Icon className="text-20" color="action">
                      vpn_key
                    </Icon>
                  </InputAdornment>
                ),
              }}
              variant="outlined"
              required
            />
          )}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mx-20 my-16"
          aria-label="REGISTER"
          disabled={_.isEmpty(dirtyFields) || !isValid}
          value="legacy"
        >
          Register
        </Button>
      </form>
    </div>
  );
}

export default JWTRegisterTab;
