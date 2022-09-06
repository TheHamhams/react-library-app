import React, {useState} from 'react'
import {DataGrid, GridColDef} from '@material-ui/data-grid'
import {useGetBooksData} from '../../custom-hooks'
import {Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle} from '@material-ui/core'
import { book_calls } from '../../api'
import { useAuth0 } from '@auth0/auth0-react'
import { Container } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import Spidey from '../../assets/images/spidey.jpg'


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


export const BooksTable = () => {
  let { user, isAuthenticated } = useAuth0()
  let {booksData, getData} = useGetBooksData()
  let [open, setOpen] = useState(false)
  const [selectionModel, setSelectionModel] = useState<any>([])

  let handleOpen = () => setOpen(true)
  let handleClose = () => setOpen(false)

  let checkoutBook = () => {
    if (!user) {
        return null
    }
    let data = {
        'book_id': selectionModel[0],
        'user_id': user.sub
    }
    book_calls.update(data)
    getData()
    setTimeout( () => {window.location.reload()}, 1000)
    
  }

  return (
    <>
    <div>
   
    <Container className='background-white' style={{height: '40vh', width: '100%', paddingBottom: '8vh',paddingTop: '5vh'}}>
        <h1 className='text-center'>Available Books</h1>

        <DataGrid getRowId={(r) => r.book_id} rows={booksData} columns={columns} checkboxSelection={true} onSelectionModelChange={(item) => {
            setSelectionModel(item)
        }}/>

        {isAuthenticated && (
            <>
            <Button variant='outlined' onClick={handleOpen}>Checkout Books</Button>

            <Dialog open={open} onClose={handleClose} >
            <DialogTitle>Checkout Book</DialogTitle>
            <DialogContent>
                <DialogContentText>Do you wish to check out the selected book?</DialogContentText>
                <Button variant='outlined' onClick={checkoutBook}>Confirm</Button>
            </DialogContent>
            <DialogActions>
                <Button variant='outlined' onClick={handleClose}>Cancel</Button>
            </DialogActions>

            </Dialog>
            </>
        )}

    </Container>
    </div>

    <div style={{marginTop: '8vh'}}>
    <Image  className='d-block mx-auto' src={Spidey} fluid rounded />
    </div>
</>
  )
}
