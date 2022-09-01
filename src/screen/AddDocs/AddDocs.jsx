import React from 'react'
import './AddDocs.css'

function AddDocs() {
  return (
    <div className='container my-5'>
     <div class="card shadow">
            <div class="card-body p-5">
        <form>
            <div class="mb-3">
                <label for="title" class="form-label">Document Title</label>
                <input type="text" class="form-control" id="title" name='title' aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Document Describtion</label>
                <input type="password" class="form-control" id="description" name='description' />
            </div>
            <button type="submit" class="btn btn-secondary">Create</button>
        </form>
        </div>
        </div>
    </div>
  )
}

export default AddDocs