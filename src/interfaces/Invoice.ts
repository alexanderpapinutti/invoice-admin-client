interface Invoice {
  _id?: string;
  invoiceNumber: string;
  customerId: string;
  tax: number;
  total: number;
  date: string;
  paid: boolean;
}

export default Invoice;
