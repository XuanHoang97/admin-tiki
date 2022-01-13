import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const TabControlOrder = ({activeTab, setActiveTab}) => {
    return (
        <Nav tabs>
            <NavItem>
                <NavLink className={activeTab === '1' ? 'active' : ''} onClick={() => setActiveTab('1')}>
                    <div className='font-weight-bold'>Tất cả</div>
                    <span className='text-secondary statical'>0 đơn hàng</span>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '2' ? 'active' : ''} onClick={() => setActiveTab('2')}>
                    <div className='font-weight-bold'>Chờ xác nhận</div>
                    <span className='text-secondary statical'>0/0 đơn quá hạn xác nhận</span>
                    
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '3' ? 'active' : ''} onClick={() => setActiveTab('3')}>
                    <div className='font-weight-bold'>Đã xác nhận</div>
                    <span className='text-secondary statical'>0/0 đơn quá hạn xác nhận</span>
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink className={activeTab === '4' ? 'active' : ''} onClick={() => setActiveTab('4')}>                         
                    <div className='font-weight-bold'>Đang vận chuyển</div>
                    <span className='text-secondary statical'>0 đơn hàng</span>
                </NavLink>
            </NavItem>
            
            <NavItem>
                <NavLink className={activeTab === '5' ? 'active' : ''} onClick={() => setActiveTab('5')}>
                    <div className='font-weight-bold'>Đã giao hàng</div>
                    <span className='text-secondary statical'>0 đơn hàng</span>
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink className={activeTab === '6' ? 'active' : ''} onClick={() => setActiveTab('6')}>                 
                    <div className='font-weight-bold'>Đã huỷ</div>
                    <span className='text-secondary statical'>0 đơn hàng</span>
                </NavLink>
            </NavItem>
        </Nav>
    );
}

export default TabControlOrder;