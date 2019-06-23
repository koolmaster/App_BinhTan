export class PhanAnhModel {
    HoTenNguoiHoi: string;
    HoiDapID: string;
    NgayTao: string;
    NoiDungText: string;
    TenLinhVu: string;
    TotalCount: string;
    NameChar: string;
    length;
}

export class ChiTietPhanAnhModel {
    ChucVuNguoiTraLoi: string;
    CongKhai: string;
    DiaChiNguoiHoi: string;
    DienThoaiNguoiHoi: string;
    EmailNguoiHoi: string;
    HoTenNguoiHoi: string;
    HoiDapID: string;
    ListFile: FileModel[];
    ListFileTL: FileModel[];
    NgayTao: string;
    NgayTraLoi: string;
    NoiDungHtml: string;
    NoiDungTraLoiHtml: string;
    TapTinDinhKem: string;
    TapTinDinhKemTL: string;
    TenLinhVuc: string;
    TenNguoiTraLoi: string;
    TieuDe: string;
    TinhTrang: string;
}

export class FileModel {
    fileID: string;
    fileName: string;
    fileType: string;
}

export class QuanHuyenModel {
    QuanHuyenID: string;
    TenQuanHuyen: string;
}

export class PhuongXaModel {
    PhuongXaID: string;
    TenPhuongXa: string;
}