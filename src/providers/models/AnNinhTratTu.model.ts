export class AnNinhTratTuModel {
    AnNinhTratTuID: string;
    AnhDaiDien: string;
    HanhViId: string;
    LoaiAnNinh: string;
    NgayBatDau: string;
    NgayKetThuc: string;
    TenHanhVi: string;
    TenLoaiAnNinh: string;
    TieuDe: string;
    length;
}

export class DetailAnNinhTratTuModel {
    AnNinhTratTuID: string;
    AnhDaiDien: string;
    ChoOHienTai: string;
    ChoOTruocKhiTron: string;
    DonViID: string;
    FileDinhKem: string;
    GioiTinh: string;
    HoKhauThuongTru: string;
    HoTen: string;
    LoaiAnNinh: string;
    NamSinh: string;
    NgayBatDau: string;
    NgayKetThuc: string;
    NoiDung: string;
    TenHanhVi: string;
    TenLoaiAnNinh: string;
    ListFile: FileModel[];
    TieuDe: string;
}

export class FileModel {
    fileID: string;
    fileName: string;
    fileType: string;
}