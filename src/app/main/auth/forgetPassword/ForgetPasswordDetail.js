import { yupResolver } from "@hookform/resolvers/yup";
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
  email: yup.string().email("You must enter a valid email").required("You must enter a email"),
});

const defaultValues = {
  email: "",
};

function ForgetPasswordDetail(props) {
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
    // dispatch(submitForgetPassword(model));
  }

  return (
    <div className="w-full">
      <form className="flex flex-col justify-center w-full" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              className="mb-16 mx-20"
              type="text"
              label="User Email"
              error={!!errors.email}
              helperText={errors?.email?.message}
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

        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mx-20 my-16"
          aria-label="Change"
          disabled={_.isEmpty(dirtyFields)}
          value="legacy"
        >
          Send
        </Button>
      </form>
    </div>
  );
}

export default ForgetPasswordDetail;
