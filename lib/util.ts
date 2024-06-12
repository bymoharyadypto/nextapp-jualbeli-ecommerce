/* round prices in shopping cart */
export const round2 = (num: number) => {
  Math.round((num + Number.EPSILON) * 100) / 100;
};

/* format currency indonesian rupiah */
export const formatRupiah = (number: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(number);
};
