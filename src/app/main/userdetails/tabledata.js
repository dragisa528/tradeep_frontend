import React, { useState } from "react";
import {
    Box,
    Button,
    Typography,
    Grid,
    TextField,
    InputAdornment,
    InputLabel,
    FormControl,
    OutlinedInput,
    Switch,
    FormControlLabel,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import IconButton from "@material-ui/core/IconButton";
import TableBody from "@material-ui/core/TableBody";
import { FaEdit, FaTrash } from "react-icons/fa";

const useStyles = makeStyles({
    table: {
        minWidth: 650
    }
});

const data2 = [
    {
        email: "Us@gmail.com",
        country: "pakistan",
        payment: "paypal",
        training: "yes"
    },
    {
        email: "Ty@gmail.com",
        country: "India",
        payment: "Payoneer",
        training: "yes"
    }
];

const TableData = () => {
    const classes = useStyles();
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [data, setData] = useState([]);

    const [editData, setEditData] = useState({
        email: "",
        country: "",
        payment: "",
        training: ""
    });

    // ...

    const handleEditOpen = (row) => {
        setSelectedRow(row);
        setEditData(row);
        setEditOpen(true);
    };

    const handleEditClose = () => {
        setEditOpen(false);
        setSelectedRow(null);
        setEditData({
            email: "",
            country: "",
            payment: "",
            training: ""
        });
    };

    const handleEditSubmit = () => {
        // Update data2 with the edited data
        const updatedData = data2.map((row) =>
            row.email === selectedRow.email ? editData : row
        );
        setData(updatedData);

        handleEditClose();
    };

    const handleDeleteOpen = (row) => {
        setSelectedRow(row);
        setDeleteOpen(true);
    };

    const handleDeleteClose = () => {
        setDeleteOpen(false);
        setSelectedRow(null);
    };

    const handleDeleteSubmit = () => {
        // Remove the selected row from data2
        const updatedData = data2.filter((row) => row.email !== selectedRow.email);
        setData(updatedData);

        handleDeleteClose();
    };

    return (
        <>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell align="right">Country</TableCell>
                        <TableCell align="right">Payment Method</TableCell>
                        <TableCell align="right">Training</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data2.map((row) => (
                        <TableRow key={row.email}>
                            <TableCell>
                                <Box display="flex" alignItems="center">
                                    <Box
                                        width={40}
                                        height={40}
                                        borderRadius="50%"
                                        marginRight={2}
                                        bgcolor="grey.300"
                                        display="flex"
                                        alignItems="center"
                                        justifyContent="center"
                                    >
                                        <Typography variant="body1" color="primary">
                                            {row.email.charAt(0).toUpperCase()}
                                        </Typography>
                                    </Box>
                                    <Typography>{row.email}</Typography>
                                </Box>
                            </TableCell>
                            <TableCell align="right">{row.country}</TableCell>
                            <TableCell align="right">{row.payment}</TableCell>
                            <TableCell align="right">{row.training}</TableCell>
                            <TableCell align="right">
                                <IconButton onClick={() => handleEditOpen(row)}>
                                    <FaEdit />
                                </IconButton>
                                <IconButton onClick={() => handleDeleteOpen(row)}>
                                    <FaTrash />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog
                open={editOpen}
                onClose={handleEditClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Edit User Data</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Edit the user data below and click Save to save the changes.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Email"
                        type="email"
                        fullWidth
                        value={editData.email}
                        onChange={(e) =>
                            setEditData({ ...editData, email: e.target.value })
                        }
                    />
                    <TextField
                        margin="dense"
                        label="Country"
                        type="text"
                        fullWidth
                        value={editData.country}
                        onChange={(e) =>
                            setEditData({ ...editData, country: e.target.value })
                        }
                    />

                    <TextField
                        margin="dense"
                        label="Payment Method"
                        type="text"
                        fullWidth
                        value={editData.payment}
                        onChange={(e) =>
                            setEditData({ ...editData, payment: e.target.value })
                        }
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={editData.training === "yes" ? true : false}
                                onChange={(e) =>
                                    setEditData({
                                        ...editData,
                                        training: e.target.checked ? "yes" : "no"
                                    })
                                }
                            />
                        }
                        label="Training"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleEditClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleEditSubmit} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
            <Dialog
                open={deleteOpen}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Delete User Data?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this user's data?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteSubmit} color="secondary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default TableData;

