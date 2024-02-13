import React, { useState, useEffect } from 'react';
import { useHistory, Link, useParams } from 'react-router-dom';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';
import StudentService from '../services/StudentService';

const AddStudentComponent = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [note, setNote] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateStudent = (e) => {
        e.preventDefault();
        const student = { firstName, lastName, note };

        if (id) {
            StudentService.updateStudent(id, student)
                .then(() => history.push('/students'))
                .catch(error => console.log(error));
        } else {
            StudentService.createStudent(student)
                .then(() => history.push('/students'))
                .catch(error => console.log(error));
        }
    };

    useEffect(() => {
        if (id) {
            StudentService.getStudentById(id)
                .then(response => {
                    setFirstName(response.data.firstName);
                    setLastName(response.data.lastName);
                    setNote(response.data.note);
                })
                .catch(error => console.log(error));
        }
    }, [id]);

    return (
        <Container>
            <Typography marginTop={5} variant="h2" align="center" gutterBottom>
                {id ? 'Update Student' : 'Add Student'}
            </Typography>
            <Grid container justifyContent="center">
                <Grid item xs={12} md={6}>
                    <form onSubmit={saveOrUpdateStudent}>
                        <TextField
                            margin="normal"
                            fullWidth
                            label="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        <TextField
                            margin="normal"
                            fullWidth
                            label="Note"
                            value={note}
                            type="number"
                            onChange={(e) => setNote(e.target.value)}
                        />
                        <Button style={{marginTop:10}} type="submit" variant="contained" color="primary">Submit</Button>
                        <Button style={{marginTop:10,marginLeft:10}} component={Link} to="/students" variant="contained" color="error">Cancel</Button>
                    </form>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddStudentComponent;
