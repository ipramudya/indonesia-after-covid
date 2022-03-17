export interface Faskes {
    success: boolean;
    message: string;
    count_total: number;
    data: Datum[];
}

export interface Datum {
    id: number;
    kode: string;
    nama: string;
    kota: Kota;
    provinsi: Provinsi;
    alamat: null | string;
    latitude: string;
    longitude: string;
    telp: null | string;
    jenis_faskes: JenisFaskes;
    kelas_rs: KelasRs;
    status: Status;
    detail: Detail[];
    source_data: SourceData;
}

export interface Detail {
    id: number;
    kode: string;
    batch: Batch;
    divaksin: number;
    divaksin_1: number;
    divaksin_2: number;
    batal_vaksin: number;
    batal_vaksin_1: number;
    batal_vaksin_2: number;
    pending_vaksin: number;
    pending_vaksin_1: number;
    pending_vaksin_2: number;
    tanggal: string;
}

export enum Batch {
    GotongRoyong = "GOTONG ROYONG",
    Lansia = "LANSIA",
    PetugasPublik = "PETUGAS PUBLIK",
    SdmKesehatan = "SDM KESEHATAN",
    Tahap3 = "TAHAP 3",
}

export enum JenisFaskes {
    Empty = "",
    Fktp = "FKTP",
    Klinik = "KLINIK",
    Puskesmas = "PUSKESMAS",
    RumahSakit = "RUMAH SAKIT",
}

export enum KelasRs {
    B = "B",
    C = "C",
    D = "D",
    Empty = "",
}

export enum Kota {
    KabBogor = "KAB. BOGOR",
}

export enum Provinsi {
    JawaBarat = "JAWA BARAT",
}

export enum SourceData {
    ControlTowerKPCPEN = "Control Tower KPCPEN",
}

export enum Status {
    SiapVaksinasi = "Siap Vaksinasi",
}
