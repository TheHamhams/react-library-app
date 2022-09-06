import React, {useState} from 'react'
import {DataGrid, GridColDef} from '@material-ui/data-grid'
import { useGetUserBooksData } from '../../custom-hooks'
import {Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle} from '@material-ui/core'
import {  user_calls } from '../../api'
import { useAuth0 } from '@auth0/auth0-react'
import { Container } from 'react-bootstrap'



const columns: GridColDef[] = [
    { field: 'book_id', headerName: 'ID', width:90, hide: true },
    { field: 'book_title', headerName: 'Title', flex:1 },
    { field: 'isbn', headerName: 'ISBN', flex:1 },
    { field: 'pages', headerName: 'Pages', flex:1 },
    { field: 'language', headerName: 'Language', flex:1 },
    { field: 'genre', headerName: 'Genre', flex:1 },
    { field: 'author', headerName: 'Author', flex:1 },
    { field: 'in_stock', headerName: 'Available', flex:1 }
]


export const UserBooksTable = () => {
  let { user } = useAuth0()
  let {userBooksData, getUserBookData} = useGetUserBooksData()
  let [open, setOpen] = useState(false)
  const [selectionModel, setSelectionModel] = useState<any>([])

  let handleOpen = () => setOpen(true)
  let handleClose = () => setOpen(false)

  let checkinBook = () => {
    if (!user) {
        return null 
    }

    let data = {
        'book_id': selectionModel[0],
        'user_id': user.sub
    }
    user_calls.update(data)
    getUserBookData()
    setTimeout( () => {window.location.reload()}, 1000)
  }

  return (
    <Container style={{height: '35vh', width: '100%'}}>
        <h2>Checked Out Books</h2>
        <DataGrid getRowId={(r) => r.book_id} rows={userBooksData} columns={columns} checkboxSelection={true} onSelectionModelChange={(item) => {
            setSelectionModel(item)
        }}/>


            <Button onClick={handleOpen}>Checkin Book</Button>

            <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Checkin Book</DialogTitle>
            <DialogContent>
                <DialogContentText>Do you wish to check out the selected book?</DialogContentText>
                <Button onClick={checkinBook}>Confirm</Button>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
            </DialogActions>

            </Dialog>
           
      

    </Container>
  )
}
