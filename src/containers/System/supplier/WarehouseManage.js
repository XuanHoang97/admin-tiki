import React from 'react';
import { TabPane } from 'reactstrap';

const WarehouseManage = ({activeTab, setActiveTab}) => {
    return (
        <TabPane tabId="2">
            <form className='list-category-special'
            // onSubmit={saveCategorySpecial}
            encType="multipart/form-data"
            >
                <div className='d-flex justify-content-between col-12 p-0'>
                    <div className="form-group col-4 p-0">
                        <label htmlFor="">Tiêu đề</label>
                        <input type="text" className="form-control" 
                            // value={categoryName}
                            // onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>

                    <div className="form-group col-2">
                        <label htmlFor="">Ngày đăng</label>
                        <input type="text" className="form-control" 
                            // value={categoryDate}
                            // onChange={(e) => setCategoryDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group col-2 pl-0">
                        <label>Danh mục</label>
                        <select className="form-control"
                            // value={categoryId}
                            // onChange={(e) => setCategoryId(e.target.value)}
                        >
                            {/* {
                                category.map((item, index) => {
                                    return <option key={index} value={item.id}>{item.name}</option>
                                })
                            }             */}
                        </select>
                    </div>

                    <div className='upload-file d-flex col-4 p-0'>
                        <div className="form-group col-4 p-0">
                            <label>Ảnh</label>
                            <input id="previewImgCategory" type="file" hidden 
                                // onChange={(e)=>changeImageCategory(e)}
                            />

                            <label htmlFor="previewImgCategory" className="btn btn-warning w-100"><i className="fas fa-upload"></i> Tải ảnh</label>  
                        </div>

                        <div className="preview-image col-8 border" 
                            // style={{backgroundImage: `url(${categoryPreviewImg})`, backgroundPosition: 'center', backgroundSize: 'cover',backgroundRepeat: 'no-repeat'}}
                        >
                            {/* {
                            categoryPreviewImg ? */}
                            <div 
                                // onClick={() =>removeImg()} 
                                className="col-md-12" style={{textAlign: 'end', position: 'absolute', right: '-1.5rem', top: '-1rem'}}>
                                <i className="far fa-times-circle text-danger"></i>
                            </div> 
                            {/* : <img src="https://giaoducthuydien.vn/wp-content/themes/consultix/images/no-image-found-360x250.png" className="w-50" alt="..." />
                            } */}
                        </div>
                    </div>

                </div>

                <button type='submit' className="btn btn-success px-2">
                    "Thêm mới"
                </button>
                <hr/>

                <div className="text-dark">Danh sách danh mục nổi bật (<b>0</b>)</div>
                <table className="table table-striped table-bordered table-hover w-100">
                    <thead className="text-white" style={{background: 'rgb(58 158 229)'}}>
                        <tr>
                            <td>Tick</td>
                            <td>STT</td>
                            <td>Ảnh</td>
                            <td>Tên</td>
                            <td>Ngày đăng</td>
                            <td>Thao tác</td>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {
                            specialCategories && specialCategories.length> 0 ?
                            specialCategories.map((item, index) => {
                                return( */}
                                    <tr>
                                        <td>
                                            <div className="form-group">
                                                <input type="checkbox" className="w-100" />
                                            </div>
                                        </td>
                                        <td>1</td>
                                        <td style={{width:'6%'}}><img src="" className='w-100' alt="" /> </td>
                                        <td className='text-primary'>abc</td>
                                        <td>{Date()}</td>
                                        <td className='d-flex'>
                                            <button type="button" className="btn text-primary  mr-3">
                                                <i className="fas fa-edit"></i>
                                            </button>

                                            <button type="button" className="btn text-danger">
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </td>
                                    </tr>
                                {/* )
                            })
                            :
                            <tr>
                                <td colSpan={6}>
                                    <div className="text-center">
                                        <h4>Không có dữ liệu</h4>
                                    </div>
                                </td>
                            </tr>
                        } */}
                    </tbody>
                </table>
            </form>
        </TabPane>
    );
}

export default WarehouseManage;