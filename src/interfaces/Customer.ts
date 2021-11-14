export type Contact = {
  name: string;
  email: string;
  phone: string;
};

interface Customer {
  _id?: string;
  name: string;
  address: string;
  postCode: string;
  currency: string;
  country: string;
  taxId: string;
  contact: Contact;
}

export default Customer;
