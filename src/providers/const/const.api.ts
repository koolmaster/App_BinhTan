// import { HttpClient } from '@angular/common/http';

export const USER_CONGDAN = {
    'User_Create': {
        functionUrl: 'Mobile_UserCongDan_Insert',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'User_Update': {
        functionUrl: 'Mobile_UserCongDan_Update',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'User_Getinfo': {
        functionUrl: 'Mobile_UserCongDan_GetInfo',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
    'registerFireBaseXLCV': {
        functionUrl: 'Mobile_UpdateInfoFireBase',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    }
}
export const API_TRUNGCAU = {
    'dstrungcau': {
        functionUrl: 'Mobile_TrungCauYKien_ListBasic',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
    'bieuquyet': {
        functionUrl: 'Mobile_TRUNGCAUYKIEN_BieuQuyet',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'chitiettrungcau': {
        functionUrl: 'Mobile_TrungCauYKien_GetByID',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
}

export const API_THONGBAO = {
    'dsthongbao': {
        functionUrl: 'Mobile_THONGBAONOIBO_GetPaged',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
    'ctthongbao': {
        functionUrl: 'Mobile_THONGBAONOIBO_GetById',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    }
}

export const API_PHANANH = {
    'dsphananh': {
        functionUrl: 'Mobile_TK_PHANANHKIENNGHI_GetDanhSachPhanAnh_ListBasic',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
    'chitietphananh': {
        functionUrl: 'Mobile_TK_PHANANHKIENNGHI_GetByHoiDapID',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
    'dsquanhuyen': {
        functionUrl: 'Mobile_DanhSachQuanHuyen',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
    'dsphuongxa': {
        functionUrl: 'Mobile_DanhSachPhuongXa',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
    'dslinhvuc': {
        functionUrl: 'Mobile_TK_PHANANHKIENNGHI_LoaiPhanAnh',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
    'uploadFile': {
        functionUrl: 'Mobile_UpLoadGiaoViec',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'downloadFile': {
        functionUrl: 'Mobile_DownLoadPhanAnhKiennNghi',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'taomoiPhanAnh': {
        functionUrl: 'Mobile_TK_PHANANHKIENNGHI_CREATE',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
}

export const API_TINTUC = {
    'dstintuc': {
        functionUrl: 'Mobile_TINTUCSUKIEN_ListBasic',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'chitiettintuc': {
        functionUrl: 'Mobile_TINTUCSUKIEN_Detail',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
}

export const API_ANNINHTRATTU = {
    'dsanninhtrattu': {
        functionUrl: 'Mobile_ANNINHTRATTU_ListBasic',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET',
    },
    'ctanninhtrattu': {
        functionUrl: 'Mobile_ANNINHTRATTU_Detail',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET',
    },
    'baotintruyna': {
        functionUrl: 'Mobile_ANNINHTRATTU_BAOTIN_Create',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST',
    },
    'downloadFile': {
        functionUrl: 'Mobile_DownLoadAnNinhTratTu',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
}
export const API_QuanLyHoSo = {
    'searchHoSo': {
        functionUrl: 'TraCuuHoSo.rest',
        service: '/portal-service/rest/portal/action/get/',
        method: 'GET'
      },
    'dstintuc': {
        functionUrl: 'Mobile_TINTUCSUKIEN_ListBasic',
        service: '/HanhChinhService.svc/HC/',
        method: 'POST'
    },
    'chitiettintuc': {
        functionUrl: 'Mobile_TINTUCSUKIEN_Detail',
        service: '/HanhChinhService.svc/HC/',
        method: 'GET'
    },
}






