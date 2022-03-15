export interface Vacinne {
    harian: Harian[];
    penambahan: Penambahan;
    total: Total;
}

export interface Harian {
    key_as_string: string;
    key: number;
    doc_count: number;
    jumlah_vaksinasi_2: number;
    jumlah_vaksinasi_1: number;
    jumlah_jumlah_vaksinasi_1_kum: number;
    jumlah_jumlah_vaksinasi_2_kum: number;
}

export interface Penambahan {
    jumlah_vaksinasi_1: number;
    jumlah_vaksinasi_2: number;
    tanggal: string;
    created: string;
}

export interface Total {
    jumlah_vaksinasi_1: number;
    jumlah_vaksinasi_2: number;
}
