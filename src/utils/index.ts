import Customer from "my-interfaces/Customer";
import Invoice from "my-interfaces/Job";
import Job from "my-interfaces/Invoice";

type PostEntityTypes = {
  entity: Customer | Invoice | Job;
  collection: "customers" | "invoices" | "jobs";
};

export async function postEntity({ entity, collection }: PostEntityTypes) {
  const baseUrl = `http://localhost:5000/api/${collection}`;
  const body = JSON.stringify(entity);

  const isNew = !entity?._id;
  const requestUrl = isNew ? baseUrl : `${baseUrl}/${entity._id}`;
  const requestMethod = isNew ? "POST" : "PUT";

  await fetch(requestUrl, {
    method: requestMethod,
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });
}
