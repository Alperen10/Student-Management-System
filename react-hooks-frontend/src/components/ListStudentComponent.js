import React, { useState, useEffect } from 'react';
import StudentService from '../services/StudentService';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import SortIcon from '@mui/icons-material/Sort';

const ListStudentComponent = () => {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);

    useEffect(() => {
        getAllStudents();
    }, []);

    const getAllStudents = () => {
        StudentService.getAllStudents()
            .then(response => {
                setStudents(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const deleteStudent = (studentId) => {
        StudentService.deleteStudent(studentId)
            .then(() => {
                getAllStudents();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const sortStudentsByNote = () => {
        const sortedStudents = [...students].sort((a, b) => a.note - b.note);
        setStudents(sortedStudents);
    };

    const viewStudent = (studentId) => {
        StudentService.getStudentById(studentId)
            .then(response => {
                setSelectedStudent(response.data);
                setOpenPopup(true);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    return (
        <div className="container">
            <h2 style={{ marginTop: 20 }} className="text-center">List Students</h2>
            <Link to="/add-student" className="btn btn-primary mb-2">
                <AddIcon /> Add Student
            </Link>
            <Button className="btn btn-success mb-2" onClick={sortStudentsByNote}>
                <SortIcon /> Sort by Note
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Student Id</TableCell>
                        <TableCell>Student First Name</TableCell>
                        <TableCell>Student Last Name</TableCell>
                        <TableCell>Student Note</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map(student => (
                        <TableRow key={student.id}>
                            <TableCell>{student.id}</TableCell>
                            <TableCell>{student.firstName}</TableCell>
                            <TableCell>{student.lastName}</TableCell>
                            <TableCell>{student.note}</TableCell>
                            <TableCell>
                                <Link to={`/edit-student/${student.id}`}>
                                    <IconButton color="info" aria-label="update">
                                        <EditIcon />
                                    </IconButton>
                                </Link>
                                <IconButton color="primary" aria-label="view" onClick={() => viewStudent(student.id)}>
                                    <Button color="primary">View</Button>
                                </IconButton>
                                <IconButton color="danger" aria-label="delete" onClick={() => deleteStudent(student.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <Dialog open={openPopup} onClose={handleClosePopup}>
                <DialogTitle>Student Details</DialogTitle>
                <DialogContent>
                    {selectedStudent && (
                        <div>
                            <p>Student ID: {selectedStudent.id}</p>
                            <p>First Name: {selectedStudent.firstName}</p>
                            <p>Last Name: {selectedStudent.lastName}</p>
                            <p>Note: {selectedStudent.note}</p>
                        </div>
                    )}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClosePopup} color="primary">Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ListStudentComponent;
