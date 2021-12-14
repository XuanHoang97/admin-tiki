import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
class InfoUser extends Component {
    render() {
        const {details, toggleFromParent} = this.props;
        
        //decode image
        let imageBase64='';
        if(details.image){
            imageBase64=new Buffer(details.image, 'base64').toString('binary')
        }
        return (
            <Modal 
                isOpen={this.props.isOpen} 
                toggle = {this.props.toggleFromParent}
                size="md"
            >
                <ModalHeader toggle={()=>this.toggle()}>Thông tin thành viên</ModalHeader>
                <ModalBody>

                    <div className="text-center py-2" style={{background: `url("https://wallpaperaccess.com/full/1732235.jpg")`, backgroundPosition: 'center', backgroundSize: 'cover'}}>                        
                        <img className="w-25 rounded-circle border border-success" 
                        style={{height: '120px', backgroundImage: `url(${imageBase64})`, backgroundPosition: 'center', backgroundSize: 'cover'}} alt="" />
                        
                        <div className="mt-2 h4 font-weight-bold">{details.firstName} {details.lastName}</div>
                        <div className="d-flex justify-content-center text-white" style={{gap : '20px'}}>
                            <span><i className="fas fa-circle mr-1 small text-danger"></i>{details.gender}</span>
                            <span><i className="fas fa-circle mr-1 small text-info"></i>24 Tuổi</span>
                            <span><i className="fas fa-circle mr-1 small text-success"></i>{details.roleId}</span>
                            <span><i className="fas fa-circle mr-1 small text-warning"></i>100 P</span>
                        </div>
                    </div>

                    <div className="mt-3 mx-5 justify-content-center" style={{display: 'grid',}}>
                        <div className=""><b>Email</b>: {details.email} </div>
                        <div className="my-2"><b>Liên hệ</b>: {details.phoneNumber} </div>
                        <div className=""><b>Địa chỉ</b>: {details.address} </div>
                        <div className="my-2"><b>Sở thích</b>: Xem phim, nghe nhạc... </div>
                        <div className=""><b>Giới thiệu</b>: Beautiful, smart, personality, independence... </div>
                    </div>
                
                </ModalBody>
                        
                <ModalFooter className="d-flex justify-content-between">
                    <Button color="info " className="px-3 btn-sm" onClick={()=>this.toggle()}><i className="fas fa-print mr-2"></i>In profile</Button>
                    <Button color="secondary" className="px-3 btn-sm" onClick={()=>this.toggle()}>Đóng</Button>
                </ModalFooter>
            </Modal>
        )
    }
}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InfoUser);