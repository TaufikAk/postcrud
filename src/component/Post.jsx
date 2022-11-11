import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Pos from "./Pos";


const Post = () => {

    const BASE_URL = 'https://jcc.brandingyou.id/api/'
    const token = sessionStorage.getItem('token')
    const navigate = useNavigate();

    const [loadPost, setLoadPost] = useState([]);

    // const [judul,setJudul] = useState('');
    const [input, setInput] = useState({
        title: '',
        content: '',
        image: {}
    });

    const [edit, setEdit] = useState({
        title: '',
        content: '',
        image: ''
    });

    const [editid, seteditid] = useState();


    const getPost = () => {
        // console.log(token)
        // e.preventDefault();
        axios.get(`${BASE_URL}post`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        })
            .then(function (response) {
                // console.log(response);
                setLoadPost(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const ngePost = (e) => {

        e.preventDefault();
        const data = new FormData()
        data.append('title', input.title)
        data.append('content', input.content)
        data.append('image', input.image)

        // console.log(input)
        // console.log(data.title);

        axios.post(`${BASE_URL}post`, data, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }

        })
            .then(function (response) {
                console.log(response);
                getPost()
            })
            .catch(function (error) {
                console.log(error);
            });

        // getPost()
    }

    const ngamBil = (id) => {
            axios.get(`${BASE_URL}post/${id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(function (response) {
                    setEdit(response.data.data)
                    seteditid(id)
                })

    }

    const ngeDit = (id) => {
        const dataEdit = new FormData()
            dataEdit.append('title', edit.title)
            dataEdit.append('content', edit.content)
            dataEdit.append('image', edit.image)

            axios.post(`${BASE_URL}post/${id}`, dataEdit, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data'
                }

            })
                .then(function (response) {
                    console.log(response);
                    getPost();

                })
                .catch(function (error) {
                    console.log(error);
                    console.log(id)
                });
    }

    const ngaPus = (id) => {
        axios.delete(`${BASE_URL}post/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'multipart/form-data'
            }

        })
            .then(function (response) {
                console.log(response);
                getPost();

            })
            .catch(function (error) {
                console.log(error);
            });

        getPost()
    }

    useEffect(() => {
        getPost();
        // console.log(token)
    }, [])
    return (
        <>
            <form encType="multipart/form-data" className=" row d-flex text-justify">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input type="text" className="form-control w-25" id="" aria-describedby="title" name="title" value={input.title}
                        onChange={(e) => setInput((inputS) => {
                            return { ...inputS, [e.target.name]: e.target.value }
                        })} />
                    <div id="emailHelp" className="form-text">We'll always share your soul with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <div>
                    <textarea className="w-25" name="content" id="" rows="3" value={input.content} onChange={(e) => setInput((inputS) => {
                        return { ...inputS, [e.target.name]: e.target.value }
                    })}></textarea>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-check-label">Upload image</label>
                    <div>
                    <input type="file" className="file" id="exampleCheck1" name="image" onChange={(e) => setInput((inputS) => {
                        return { ...inputS, [e.target.name]: e.target.files[0] }
                    })} />
                    </div>
                </div>
                <button className="btn btn-primary w-25" onClick={ngePost}>Submit</button>
            </form>
            <div className="row">
                {
                    loadPost.map(isiPost => {
                        return <Pos key={isiPost.id} id={isiPost.id} title={isiPost.title} body={isiPost.content} imag={isiPost.image} delete={ngaPus} edit={ngamBil} />
                    })
                }
            </div>

            <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit</h5>
                            <button type="button" className="btn-close" id="btn" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body mb-4">
                            <form onSubmit={(e) => {
                                e.preventDefault()
                                ngeDit(editid)
                            }}>
                                <div className="form-group">
                                    <i className="fa fa-user"></i>
                                    <p>Title</p>
                                    <input type="text" className="form-control" id="title" value={edit.title} onChange={(e) => setEdit((inputE) => {
                                        return { ...inputE, [e.target.id]: e.target.value }
                                    })} />
                                </div>
                                <div className="form-group my-4">
                                    <i className="fa fa-lock"></i>
                                    <p>Content</p>
                                    <textarea className="w-100" name="" id="content" cols="30" rows="3" value={edit.content} onChange={(e) => setEdit((inputE) => {
                                        return { ...inputE, [e.target.id]: e.target.value }
                                    })}></textarea>
                                </div>
                                {/* <div className="mb-3">
                                    <label className="form-check-label">Upload image</label>
                                    <input type="file" className="file" id="exampleCheck1" name="image" onChange={(e) => setEdit((inputE) => {
                                        return { ...inputE, [e.target.name]: e.target.files[0] }
                                    })} />
                                </div> */}
                                <div className="col d-flex justifiy-content-center">
                                    <button className="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="modal fade" id="deleteleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Apakah anda yakin ingin menghapus?</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body mb-4">
                                            <form action="" method="post">
                                                <div className="form-group">
                                                <button className="btn btn-primary" onClick={ngaPus}>Ya</button>
                                                <button className="btn btn-primary" onClick={getPost}>Tidak</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
        </>
    )
}

export default Post;