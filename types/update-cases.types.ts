export interface Update {
    data: Data;
    penambahan: Penambahan;
    harian?: HarianEntity[] | undefined;
    total: Total;
}
export interface Data {
    id: number;
    jumlah_odp: number;
    jumlah_pdp: number;
    total_spesimen: number;
    total_spesimen_negatif: number;
}
export interface Penambahan {
    jumlah_positif: number;
    jumlah_meninggal: number;
    jumlah_sembuh: number;
    jumlah_dirawat: number;
    tanggal: string;
    created: string;
    updated: string;
}
export interface HarianEntity {
    key_as_string: string;
    key: number;
    doc_count: number;
    jumlah_meninggal: number;
    jumlah_sembuh: number;
    jumlah_positif: number;
    jumlah_dirawat: number;
    jumlah_positif_kum: number;
    jumlah_sembuh_kum: number;
    jumlah_meninggal_kum: number;
    jumlah_dirawat_kum: number;
}
export interface Total {
    jumlah_positif: number;
    jumlah_dirawat: number;
    jumlah_sembuh: number;
    jumlah_meninggal: number;
}
