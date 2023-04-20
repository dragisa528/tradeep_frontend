import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const PhoneInput = () => {
    const classes = useStyles();
    const [country, setCountry] = useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    return (
        <FormControl
        style={{marginTop:"20px"}}
        variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-adornment-phone">Phone Number</InputLabel>
            <OutlinedInput
                id="outlined-adornment-phone"
                startAdornment={
                    <InputAdornment position="start">
                        <Select
                            native
                            value={country}
                            onChange={handleChange}
                            label="Country"
                            inputProps={{
                                name: 'country',
                                id: 'outlined-country-simple',
                            }}
                        >
                            <option value="+1">USA</option>
                            <option value="+2">Canada</option>
                            <option value="+3">Mexico</option>
                            <option value="+98">Pakistan</option>
                            <option value="+99">Bangladesh</option>
                            <option value="+100">India</option>
                        </Select>
                    </InputAdornment>
                }
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton>
                            <PhoneIcon />
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    );
};

export default PhoneInput;
