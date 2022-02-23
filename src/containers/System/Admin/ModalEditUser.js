import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import _ from 'lodash';
import * as actions from '../../../store/actions';

const ModalEditUser = (props) => {
    const [id, setId] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [gender, setGender] = useState('');
    const [roleId, setRoleId] = useState('');
    const [positionId, setPositionId] = useState('');
    const [image, setImage] = useState('');
    const [previewImgURL, setPreviewImgURL] = useState('');

    const dispatch = useDispatch();
    const genders = useSelector(state => state.admin.genders);
    const roles = useSelector(state => state.admin.roles);
    const positions = useSelector(state => state.admin.positions); 

    // fill info user to edit
    useEffect(() => {
        let user =props.currentUser;
        if(user && !_.isEmpty(user)){
            setId(user.id);
            setEmail(user.email);
            setPassword('hardcode');
            setUsername(user.username);
            setAddress(user.address);
            setPhoneNumber(user.phoneNumber);
            setGender(user.gender);
            setRoleId(user.roleId);
            setPositionId(user.positionId);
            setPreviewImgURL(user.image);
        }
        dispatch(actions.fetchGender());
        dispatch(actions.fetchRole());
        dispatch(actions.fetchPosition());
    }, [dispatch, props.currentUser]);

    const toggle =()=>{
        props.toggleModal();
    }

    //upload file
    const handleOnchangeImage=async(e)=>{
        let data=e.target.files;
        let file=data[0];
        if(file){
            let objectUrl=URL.createObjectURL(file)
            setPreviewImgURL(objectUrl);
            setImage(file);
        }
    }

    //remove image
    const removeImg=()=>{
        setPreviewImgURL('');
        setImage('');
    }

    const handleSaveUser=(e)=>{
        e.preventDefault();
        props.editUser({
            id, email, password, username, address, phoneNumber,
            gender, roleId, positionId, image, previewImgURL
        });
        toggle();
    }

    return (
        <Modal 
            isOpen={props.isOpen} 
            toggle={()=>toggle()} 
            className={'modal-user-container'}
            size="lg"
        >
            <form onSubmit={handleSaveUser}
                encType='multipart/form-data'
            >
            
            <ModalHeader toggle={()=>toggle()}>Cập nhật thành viên</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <div>
                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>Email</label>
                                <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" className="form-control" />
                            </div>

                            <div className="form-group col-md-3">
                                <label>Ảnh đại diện</label>
                                <input id="previewImg" type="file" hidden 
                                    onChange={(e)=>handleOnchangeImage(e, 'previewImgURL')} 
                                    name="image"
                                />
                                <label htmlFor="previewImg" className="btn btn-success w-100"><i className="fas fa-upload"></i> Tải ảnh</label>                   
                            </div>

                            <div className="preview-image col-md-2 border" 
                                style={{backgroundImage: `url(${previewImgURL})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                            >
                                {
                                previewImgURL ?
                                <div onClick={() => removeImg()} className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                    <i className="far fa-times-circle text-danger"></i>
                                </div> : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-100" alt="..." />
                                }
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>Họ tên </label>
                                <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" className="form-control" />
                            </div>
                        </div>
                        
                        <div className="row">    
                            <div className="form-group col-6">
                                <label>Địa chỉ</label>
                                <input onChange={(e)=>setAddress(e.target.value)} value={address} type="text" className="form-control" />
                            </div>

                            <div className="form-group col-6">
                                <label>Số điện thoại</label>
                                <input onChange={(e)=>setPhoneNumber(e.target.value)} value={phoneNumber} type="text" className="form-control" />
                            </div>
                        </div>

                        <div className="row">
                            <div className="form-group col-md-6">
                                <label>Giới tính</label>
                                <select className="form-control"
                                    onChange={(e) => setGender(e.target.value)}
                                    value={gender}
                                >
                                    {
                                        genders && genders.length >0 &&
                                        genders.map((item, index) => {
                                            return (
                                                <option key={index} value={item.ValueVi}>{item.valueVi}</option>
                                            )
                                        })
                                    }           
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <label>Vai trò</label>
                                <select className="form-control"
                                    onChange={(e) => setRoleId(e.target.value)}
                                    value={roleId}
                                >
                                    {
                                        roles && roles.length >0 &&
                                        roles.map((item, index) => {
                                            return (
                                                <option key={index} value={item.valueVi}>{item.valueVi}</option>
                                            )
                                        })
                                    }           
                                </select>
                            </div>

                            <div className="form-group col-md-6">
                                <label>Chức danh</label>
                                <select className="form-control"
                                    onChange={(e) => setPositionId(e.target.value)}
                                    value={positionId}
                                >
                                    {
                                        positions && positions.length >0 &&
                                        positions.map((item, index) => {
                                            return (
                                                <option key={index} value={item.valueVi}>{item.valueVi}</option>
                                            )
                                        })
                                    }           
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalBody>

            <ModalFooter>
                <Button type='submit' color="primary" className="px-3">Cập nhật</Button>{' '}
                <Button color="secondary" className="px-3" onClick={()=>toggle()}>Huỷ</Button>
            </ModalFooter>
            </form>
        </Modal>
    )
}
export default ModalEditUser;
