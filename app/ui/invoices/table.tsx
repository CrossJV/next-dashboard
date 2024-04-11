import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const invoices = await fetchFilteredInvoices(query, currentPage);

  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  №
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Сотрудник
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Заказчик
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Перевозчик
                </th>
                <th scope="col" className="px-4 py-5 font-medium">
                  Маршрут
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Дата заявки
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ставка заказчика
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Ожидаемая дата оплаты
                </th>
                <th scope="col" className="px-4 py-5 font-medium">
                  Дата оплаты заказчиком
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  20%
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Стоимость перевозки
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Дата оплаты перевозчику
                </th>
                <th scope="col" className="px-4 py-5 font-medium">

                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  20%
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Комиссия
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Водитель, ТС
                </th>
                <th scope="col" className="px-4 py-5 font-medium">
                  № Счета для зазказчика
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Дата поступления документов
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Срок оплаты перевозчику
                </th>
                <th scope="col" className="px-4 py-5 font-medium">
                  Дата оплаты документов
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
            {invoices?.map((invoice) => (
                <tr
                    key={invoice.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">

                      <p>{invoice.id}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.employee_name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.customer_name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.driver_company_name}
                    {/*{formatDateToLocal(invoice.date)}*/}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.route}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date_ticket)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.customer_amount}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">

                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date_payment_customer)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">

                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.transit_cost}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date_payment_transit)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">

                  </td>
                  <td className="whitespace-nowrap px-3 py-3">

                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.commission}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.driver_name}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {invoice.bill_for_customer}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date_income_docs)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date_payment_transit_end)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date_payment_docs)}
                  </td>

                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id}/>
                      <DeleteInvoice id={invoice.id}/>
                    </div>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
