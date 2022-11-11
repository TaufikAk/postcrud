

const Pos = (props) => {
    return (
        <>
            <div className="card mt-5 mx-2 col-3">
                <img src={props.imag} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.body}</p>
                    <div className="col m-3 d-flex justify-content-evenly">
                        {/* <button className="btn btn-warning" onClick={() => props.edit(props.id)}>Edit</button> */}
                        <button className="btn btn-warning" onClick={()=> props.edit(props.id)} data-bs-toggle="modal" data-bs-target="#editModal">Edit</button>
                        <button className="btn btn-danger" onClick={() => {if(window.confirm('Yakin hapus post?')){props.delete(props.id)}}}>Delete</button>
                        {/* <button className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button> */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Pos;