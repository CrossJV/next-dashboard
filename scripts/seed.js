const { db } = require('@vercel/postgres');
const {
  invoices,
  customers,
  revenue,
  users,
  driverCompanies,
    drivers,
} = require('../app/lib/placeholder-data.js');
const bcrypt = require('bcrypt');

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        is_admin BOOLEAN NOT NULL
      );
    `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        const hashedPassword = await bcrypt.hash(user.password, 10);

        return client.sql`
        INSERT INTO users (id, name, email, password, is_admin)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword}, ${user.isAdmin})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function seedInvoices(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS invoices (
    id SERIAL PRIMARY KEY,
    employee_fk INT,
    customer_fk INT,
    drive_company_fk INT,
    route VARCHAR(255),
    date_ticket DATE NOT NULL,
    customer_amount INT NOT NULL,
    date_payment DATE,
    date_payment_customer DATE,
    transit_cost INT NOT NULL,
    date_payment_transit DATE,
    commission INT,
    driver VARCHAR(255),
    bill_for_customer INT,
    date_income_docs DATE,
    date_payment_transit_end DATE,
    date_payment_docs DATE
  );
`;

    console.log(`Created "invoices" table`);

    // Insert data into the "invoices" table
    const insertedInvoices = await Promise.all(
      invoices.map(
        (invoice) => client.sql`
        INSERT INTO invoices (
        id, 
        employee_fk, 
        customer_fk, 
        drive_company_fk,
        route, 
        date_ticket,
        customer_amount,
        date_payment,
        date_payment_customer,
        transit_cost,
        date_payment_transit,
        commission,
        driver,
        bill_for_customer,
        date_income_docs,
        date_payment_transit_end,
        date_payment_docs
        )
        VALUES (${invoice.id}, ${invoice.employee_fk}, ${invoice.customer_fk}, ${invoice.drive_company_fk}, ${invoice.route}, 
                ${invoice.date_ticket}, ${invoice.customer_amount}, ${invoice.date_payment},
                ${invoice.date_payment_customer}, ${invoice.transit_cost}, ${invoice.date_payment_transit},
                ${invoice.commission}, ${invoice.driver}, ${invoice.bill_for_customer},
                ${invoice.date_income_docs}, ${invoice.date_payment_transit_end}, ${invoice.date_payment_docs})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedInvoices.length} invoices`);

    return {
      createTable,
      invoices: insertedInvoices,
    };
  } catch (error) {
    console.error('Error seeding invoices:', error);
    throw error;
  }
}

async function seedCustomers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS customers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedCustomers = await Promise.all(
      customers.map(
        (customer) => client.sql`
        INSERT INTO customers (id, name)
        VALUES (${customer.id}, ${customer.name})
        ON CONFLICT (id) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedCustomers.length} customers`);

    return {
      createTable,
      customers: insertedCustomers,
    };
  } catch (error) {
    console.error('Error seeding customers:', error);
    throw error;
  }
}

async function seedDriverCompanies(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS driver_companies (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedDriverCompanies = await Promise.all(
        driverCompanies.map(
            (customer) => client.sql`
        INSERT INTO driver_companies (id, name)
        VALUES (${customer.id}, ${customer.name})
        ON CONFLICT (id) DO NOTHING;
      `,
        ),
    );

    console.log(`Seeded ${driverCompanies.length} driver_companies`);

    return {
      createTable,
      driverCompanies: driverCompanies,
    };
  } catch (error) {
    console.error('Error seeding driver_companies:', error);
    throw error;
  }
}

async function seedDrivers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS drivers (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "customers" table`);

    // Insert data into the "customers" table
    const insertedDriverCompanies = await Promise.all(
        drivers.map(
            (customer) => client.sql`
        INSERT INTO drivers (id, name)
        VALUES (${customer.id}, ${customer.name})
        ON CONFLICT (id) DO NOTHING;
      `,
        ),
    );

    console.log(`Seeded ${drivers.length} drivers`);

    return {
      createTable,
      drivers: drivers,
    };
  } catch (error) {
    console.error('Error seeding drivers:', error);
    throw error;
  }
}

async function seedRevenue(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS revenue (
        month VARCHAR(4) NOT NULL UNIQUE,
        revenue INT NOT NULL
      );
    `;

    console.log(`Created "revenue" table`);

    // Insert data into the "revenue" table
    const insertedRevenue = await Promise.all(
      revenue.map(
        (rev) => client.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${rev.month}, ${rev.revenue})
        ON CONFLICT (month) DO NOTHING;
      `,
      ),
    );

    console.log(`Seeded ${insertedRevenue.length} revenue`);

    return {
      createTable,
      revenue: insertedRevenue,
    };
  } catch (error) {
    console.error('Error seeding revenue:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  // await seedUsers(client);
  await seedCustomers(client);
  await seedDriverCompanies(client);
  await seedDrivers(client);
  // await seedInvoices(client);
  // await seedRevenue(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
