export interface DetailProvince {
    last_date: string;
    provinsi: string;
    kasus_total: number;
    kasus_tanpa_tgl: number;
    kasus_dengan_tgl: number;
    meninggal_persen: number;
    meninggal_tanpa_tgl: number;
    meninggal_dengan_tgl: number;
    sembuh_persen: number;
    sembuh_tanpa_tgl: number;
    sembuh_dengan_tgl: number;
    list_perkembangan?: ListPerkembanganEntity[] | null;
    data: Data;
}
export interface ListPerkembanganEntity {
    tanggal: number;
    KASUS: number;
    MENINGGAL: number;
    SEMBUH: number;
    DIRAWAT_OR_ISOLASI: number;
    AKUMULASI_KASUS: number;
    AKUMULASI_SEMBUH: number;
    AKUMULASI_MENINGGAL: number;
    AKUMULASI_DIRAWAT_OR_ISOLASI: number;
}
export interface Data {
    last_update: string;
    kasus: Kasus;
    sembuh: Sembuh;
    meninggal: Meninggal;
    perawatan: Perawatan;
}
export interface Kasus {
    kondisi_penyerta: KondisiPenyertaOrJenisKelaminOrGejala;
    jenis_kelamin: KondisiPenyertaOrJenisKelaminOrGejala;
    kelompok_umur: KelompokUmur;
    gejala: KondisiPenyertaOrJenisKelaminOrGejala;
}
export interface KondisiPenyertaOrJenisKelaminOrGejala {
    current_data: number;
    missing_data: number;
    list_data?: ListDataEntity[] | null;
}
export interface ListDataEntity {
    key: string;
    doc_count: number;
}
export interface KelompokUmur {
    current_data: number;
    missing_data: number;
    list_data?: ListDataEntity1[] | null;
}
export interface ListDataEntity1 {
    key: string;
    doc_count: number;
    usia: Usia;
}
export interface Usia {
    value: number;
}
export interface Sembuh {
    kondisi_penyerta: KondisiPenyertaOrGejala;
    jenis_kelamin: JenisKelaminOrGejalaOrKondisiPenyerta;
    kelompok_umur: KelompokUmur1;
    gejala: JenisKelaminOrGejalaOrKondisiPenyerta;
}
export interface KondisiPenyertaOrGejala {
    list_data?: null[] | null;
}
export interface JenisKelaminOrGejalaOrKondisiPenyerta {
    list_data?: ListDataEntity[] | null;
}
export interface KelompokUmur1 {
    list_data?: ListDataEntity1[] | null;
}
export interface Meninggal {
    kondisi_penyerta: JenisKelaminOrGejalaOrKondisiPenyerta;
    jenis_kelamin: JenisKelaminOrGejalaOrKondisiPenyerta;
    kelompok_umur: KelompokUmur1;
    gejala: JenisKelaminOrGejalaOrKondisiPenyerta;
}
export interface Perawatan {
    kondisi_penyerta: KondisiPenyertaOrGejala;
    jenis_kelamin: JenisKelaminOrGejalaOrKondisiPenyerta;
    kelompok_umur: KelompokUmur1;
    gejala: KondisiPenyertaOrGejala;
}
