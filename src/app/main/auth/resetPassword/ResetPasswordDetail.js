import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import InputAdornment from "@material-ui/core/InputAdornment";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import _ from "@lodash";

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  newPassword: yup
    .string()
    .required("Please enter your new password.")
    .min(8, "Password is too short - should be 8 chars minimum."),
  passwordConfirm: yup.string().oneOf([yup.ref("newPassword"), null], "Passwords must match"),
});

const defaultValues = {
  newPassword: "",
  passwordConfirm: "",
};

function ResetPasswordDetail(props) {
  const routeParams = useParams();

  const dispatch = useDispatch();
  const authRegister = useSelector(({ auth }) => auth.register);

  const { control, formState, handleSubmit, reset, setError } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  useEffect(() => {
    authRegister.errors.forEach((error) => {
      setError(error.type, {
        type: "manual",
        message: error.message,
      });
    });
  }, [authRegister.errors, setError]);

  function onSubmit(model) {
    // dispatch(submitResetPassword(model, routeParams.token));
  }

  return (
    <div className="w-full">
      <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="newPassword"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-16 mx-20"
              type="password"
              label="New Password"
              error={!!errors.newPassword}
              helperText={errors?.newPassword?.message}
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
          name="passwordConfirm"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-16 mx-20"
              type="password"
              label="Confirm Password"
              error={!!errors.passwordConfirm}
              helperText={errors?.passwordConfirm?.message}
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
          aria-label="Change"
          disabled={_.isEmpty(dirtyFields)}
          value="legacy"
        >
          Create
        </Button>
      </form>
    </div>
  );
}

export default ResetPasswordDetail;
