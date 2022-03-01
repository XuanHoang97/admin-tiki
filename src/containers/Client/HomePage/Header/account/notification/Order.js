import { formatDate } from 'components/Formatting/FormatDate';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetAllNotify} from 'store/actions';

const Order = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const notify = useSelector(state => state.auth.notify);

    // fetch notify
    let userId = user ? user.id : '';
    useEffect(() => {
        dispatch(GetAllNotify(userId));
    }, [dispatch, userId]);

    return (
        <div className=''>
            <div className='text-right text-dark border markAll btn-light mb-2 p-2'>Đánh dấu đã đọc tất cả</div>
            {
                notify && notify.length > 0 ?
                notify.map((item, index) => {
                    return (
                        <div className='d-flex align-items-center justify-content-between bg-light my-3 p-3' key={index}>
                            <div className='d-flex'>
                                <img src={item.image} style ={{width: '50px', height:'50px'}} alt="" />
                                <div className='item-list ml-3'>
                                    <div className='font-weight-bold text-primary'>{item.title}</div>
                                    <span className='content'>{item.content}</span>
                                    <div className='text-secondary small'>{formatDate(item.date)}</div>
                                </div>
                            </div>
                            <button type='button' className="btn btn-outline-secondary">Xem chi tiết</button>
                        </div>
                    )
                })
                :
                <div className='text-center'>Không có thông báo nào</div>
            }
        </div>
    );
}
export default Order;