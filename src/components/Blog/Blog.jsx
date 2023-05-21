import React from "react";

function Blog() {
  return (
    <>
      <main className="min-h-screen ">
        <div className="-z-10 fixed bg-sky-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
        <div className="-z-10 fixed  right-10 bg-lime-300 [filter:blur(120px)] w-[200px] h-[200px]"></div>
        <div className="-z-10 fixed bottom-0 left-11 bg-pink-300 [filter:blur(120px)] w-[400px] h-[200px]"></div>
        <div className="-z-10 fixed bottom-0 right-11 bg-yellow-200 [filter:blur(120px)] w-[400px] h-[200px]"></div>
        <div className="md:mx-[200px] mt-[90px]  dark:text-white  px-[20px] mb-[60px] ">
          <h2 className="text-center   my-[70px] text-3xl font-bold">
            Question & Answer Blog
          </h2>
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">
              Q. What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>
            <p>
              An access token is a short-lived, limited-scope credential that is
              used to access protected resources. A refresh token is a
              long-lived, high-scope credential that can be used to obtain new
              access tokens. Access tokens are typically used to access
              resources that are not sensitive, such as public data or
              user-specific data that does not require authorization. Refresh
              tokens are typically used to access resources that are sensitive,
              such as user-specific data that requires authorization. Access
              tokens are typically stored in the browser's local storage or
              cookies. Refresh tokens are typically stored in the browser's
              local storage or a secure database.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="text-2xl font-bold">
              Q. Compare SQL and NoSQL databases?
            </h3>
            <p>
              SQL databases are relational databases that use a structured query
              language (SQL) to access and manipulate data. SQL databases are
              typically used for OLTP (online transaction processing)
              applications, which require high performance and data consistency.
              SQL databases have a predefined schema, which means that the data
              types and relationships between data are defined in advance. SQL
              databases are vertically scalable, which means that they can be
              scaled by increasing the processing power or memory of the
              database server. NoSQL databases are non-relational databases that
              do not use a predefined schema. NoSQL databases are typically used
              for big data and unstructured data applications. NoSQL databases
              are horizontally scalable, which means that they can be scaled by
              adding more database servers. NoSQL databases do not support ACID
              transactions, which means that they may not be suitable for
              applications that require high data consistency.
            </p>
            <div className="w-[320px] md:w-[450px] ">
              <img src="/images/code.png" alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-[20px]">
            <h3 className="text-2xl font-bold">
              Q. What is express js? What is Nest JS?
            </h3>
            <p>
              Express.js is a minimal and flexible Node.js web application
              framework that provides a robust set of features for building web
              applications. It is designed to be easy to use and extend, and it
              is used by a wide range of developers to build all types of web
              applications. Nest.js is a framework built on top of Express.js
              that provides a more opinionated and structured approach to
              building web applications. It uses the Model-View-Controller (MVC)
              architectural pattern and provides built-in support for dependency
              injection, routing, and other features. Nest.js is designed to be
              scalable and easy to maintain, and it is used by a growing number
              of developers to build enterprise-grade web applications.
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-[20px]">
            <h3 className="text-2xl font-bold">
              Q. What is MongoDB aggregate and how does it work?
            </h3>
            <p>
              MongoDB aggregate is a feature of MongoDB that allows you to
              perform complex operations on data in a collection. Aggregate
              operations are performed using an aggregation pipeline, which is a
              sequence of stages that process documents. Each stage performs an
              operation on the input documents, and the documents that are
              output from a stage are passed to the next stage. The aggregation
              pipeline is a powerful tool that can be used to perform a wide
              variety of operations on data.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Blog;
