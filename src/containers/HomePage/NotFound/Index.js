import React from 'react';
import { Link } from 'react-router-dom';
import { path } from 'utils';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './NotFound.scss';

const NotFound = () => {
    return (
        <>
        <Header/>
        <div className="container main" style={{ overflow: 'hidden' }}>
            <div className="err">
                <div className="banner-top"></div>
                <div className="banner-bottom"></div>
                <div className="banner-content">
                    <div className="err-404 question"><img className="w-50" src="https://salt.tikicdn.com/assets/img/404/super.png" alt='404 Not Found' /></div>
                    <div className="err-404"><img className="w-75" src="https://salt.tikicdn.com/assets/img/404/404.png" alt='404 Not Found' /></div>
                    <div className="err-404 err-h">
                        <h1>Xin lỗi, trang bạn tìm kiếm <br /> đang trong quá trình phát triển !</h1>
                    </div>
                </div>
            </div>
            <div className="err">
                <h5 className="suggest">Bạn có thể thử những liên kết sau</h5>
                <hr />
                <div className='row btn-quit'>
                    <Link to={path.HOMEPAGE}>
                        <button type="button" className="btn btn-primary px-2"><i className="fa fa-angle-left mr-2"></i> Quay lại trang trước</button>
                    </Link>
                    <Link to={path.HOMEPAGE}>
                        <button type="button" className="btn btn-success px-2">Tiếp tục mua hàng</button>
                    </Link>
                    <Link to={path.HOMEPAGE}>
                        <button type="button" className="btn btn-primary px-2"> Xem thông tin tài khoản <i className="fa fa-angle-right ml-2"></i></button>
                    </Link>
                </div>
            </div>
        </div>

        <Footer />
        </>
    );
}

export default NotFound;