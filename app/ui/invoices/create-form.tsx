import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';

export default function Form({ customers }: { customers: CustomerField[] }) {
  return (
    <form>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Заказчик
          </label>
          <div className="relative">
            <select
                id="customer"
                name="customerId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
            >
              <option value="" disabled>
                Выбрать заказчика
              </option>
              {customers.map((customer) => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
              ))}
            </select>
            <UserCircleIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Перевозчик
          </label>
          <div className="relative">
            <select
                id="driverCompany"
                name="driverCompanyId"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
            >
              <option value="" disabled>
                Выбрать перевозчика
              </option>
              {/*{customers.map((customer) => (*/}
              {/*    <option key={customer.id} value={customer.id}>*/}
              {/*      {customer.name}*/}
              {/*    </option>*/}
              {/*))}*/}
            </select>
            <UserCircleIcon
                className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500"/>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Маршрут
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="route"
                  name="route"
                  type="text"
                  placeholder="Введите маршрут"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Дата заявки
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="dateTicket"
                  name="dateTicket"
                  type="date"
                  placeholder="Введите дату"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Ставка заказчика
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="amountCustomer"
                  name="amountCustomer"
                  type="number"
                  step="0.01"
                  placeholder="Введите ставку ₽"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Дата оплаты заказчиком
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="datePayment"
                  name="datePayment"
                  type="date"
                  placeholder="Введите дату"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Стоимость перевозки
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="transitCost"
                  name="transitCost"
                  type="number"
                  step="0.01"
                  placeholder="Введите ставку ₽"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Водитель
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="driver"
                  name="driver"
                  type="text"
                  placeholder="Введите водителя"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Номер счета для заказа
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="billNumber"
                  name="billNumber"
                  type="number"
                  placeholder="Введите номер счета"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Дата поступление документов
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="dateIncome"
                  name="dateIncome"
                  type="date"
                  placeholder="Введите дату поступления документов"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Срок оплаты
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="dateEndPay"
                  name="dateEndPay"
                  type="date"
                  placeholder="Введите дату последнего дня оплаты"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Дата отправки документов
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                  id="dateSendDoc"
                  name="dateSendDoc"
                  type="date"
                  placeholder="Введите дату"
                  className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
            href="/dashboard/invoices"
            className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Отмена
        </Link>
        <Button type="submit">Создать отчет</Button>
      </div>
    </form>
  );
}
