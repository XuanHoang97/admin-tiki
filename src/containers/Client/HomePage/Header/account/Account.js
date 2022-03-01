import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { path } from 'utils';
import { Link } from 'react-router-dom';
import instance from './../../../../../axios';
import { useHistory } from 'react-router-dom';
import { getUser, logoutAccount } from 'store/actions';

const token = localStorage.getItem('token');
const Account = () => {
    const [hoverAccount, setHoverAccount] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const user = useSelector(state => state.auth.user);

    // Refresh token
    useEffect(() => {
        if(token){
            instance.get(`/user`,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(res => {
                dispatch(getUser(res))
            })
            .catch(err => {
                localStorage.removeItem('token');
                console.log(err);
            })
        }
    }, [dispatch]);


    //logout
    const Logout = async () => {
        try {
            dispatch(logoutAccount());
            localStorage.removeItem('token');
            dispatch(getUser(''))
        } catch (error) {
            console.log(error);
        }
    }

    const profile = () => {
        history.push(`${path.ACCOUNT}`);
    }
    

    return (
        <React.Fragment>
            <span className='account d-flex align-items-center justify-content-center text-white'
                onMouseEnter={() => setHoverAccount(true)}
            >    
                {
                    user ?
                    <React.Fragment>
                        <img src={user && user.image ? user.image : `http://res.cloudinary.com/do7qmg6jr/image/upload/v1645518444/sbgr7wd9k1t9v8f0cwvm.jpg`} className='rounded-circle' style={{width:'30px', height:'30px'}} alt="" />
                        <b className='ml-2' style={{fontSize: '12px'}}>{user?.username}</b>
                    </React.Fragment>
                    :
                    <span>Tài khoản <i className="fas fa-sort-down"></i></span>
                }
            </span>

            {hoverAccount && (
                <div className="user-account" 
                    onMouseLeave={() => setHoverAccount(false)}
                >
                    {
                        user ?
                        <div className='acc-detail'>
                            <div onClick={()=>profile(user.id)} className="item-acc">
                                <img src="https://icones.pro/wp-content/uploads/2021/02/icone-utilisateur-vert.png" className='mr-2' style={{width: '8%'}}  alt="" />
                                Tài khoản của tôi
                            </div>

                            <div onClick={()=>history.push(path.ORDER)} className="item-acc">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNU-ZEXVPgvlrEPzhaAIFjyRUaqglcuKdkx4lgk2r-ryshxRle56ba4S4SaUoI0GTf2Iw&usqp=CAU" className='mr-2' style={{width: '8%'}}  alt="" />
                                Đơn hàng của tôi
                            </div>
                            
                            <div onClick={Logout} className="item-acc">
                                <img src="https://www.clipartmax.com/png/middle/147-1470587_logout-logout-icon-red-png.png" className='mr-2' style={{width: '8%'}}  alt="" />           
                                Đăng xuất
                            </div>
                        </div>
                        :
                        <div>
                            <Link to={path.REGISTER} className="dropdown-item mb-2">
                                <button type="button" className="btn btn-warning btn-block">Tạo tài khoản</button>
                            </Link>

                            <Link to={path.LOGIN_AUTH} className="dropdown-item mb-2">
                                <button type="button" className="btn btn-success btn-block"> Đăng nhập</button>
                            </Link>
                            <div className="dropdown-item mb-2">
                                <button type="button" className="d-flex align-items-center btn btn-primary btn-block">
                                    <i className="fab fa-facebook-f mr-4"></i> <span>Đăng nhập bằng Facebook</span>
                                </button>
                            </div>

                            <div className="dropdown-item mb-2">
                                <button type="button" className="d-flex align-items-center btn btn-danger btn-block">
                                    <i className="fab fa-google-plus-g mr-3"></i> <span>Đăng nhập bằng Google</span>
                                </button>
                            </div>
                        </div>
                    }
                </div>
            )}
        </React.Fragment>
    );
}
export default Account;