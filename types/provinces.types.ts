export interface Provinces {
    last_date: string;
    current_data: number;
    missing_data: number;
    tanpa_provinsi: number;
    list_data?: ListDataEntity[] | null;
}
export interface ListDataEntity {
    key: string;
    doc_count: number;
    jumlah_kasus: number;
    jumlah_sembuh: number;
    jumlah_meninggal: number;
    jumlah_dirawat: number;
    jenis_kelamin?: JenisKelaminEntity[] | null;
    kelompok_umur?: KelompokUmurEntity[] | null;
    lokasi?: Lokasi | null;
    penambahan: Penambahan;
}
export interface JenisKelaminEntity {
    key: string;
    doc_count: number;
}
export interface KelompokUmurEntity {
    key: string;
    doc_count: number;
    usia: Usia;
}
export interface Usia {
    value: number;
}
export interface Lokasi {
    lon: number;
    lat: number;
}
export interface Penambahan {
    positif: number;
    sembuh: number;
    meninggal: number;
}
