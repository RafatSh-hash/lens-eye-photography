import React from "react";

const Blog = () => {
  //Blog Page Ques And Answers
  return (
    <div className="p-5 mt-0">
      {/* <h1>Hello Blog</h1> */}
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : What is the difference between
          <span className="text-red-500"> SQL</span> and{" "}
          <span className="text-red-500"> NoSQL</span>?
        </h3>
        <p>
          <span className="underline">Ans</span> : Remember that SQL dialects
          share many properties though they interface with distinct databases.
          Flavors of NoSQL vary far more across their attendant systems, so
          comparison can be more useful between multiple non-relational
          technologies vs. SQL generally. Perhaps the most recognizable SQL
          dialect is MySQL, an open source and free RDBMS (though available
          through proprietary licenses as well). Its use is widespread in web
          applications, and it is known for compatibility, support, and good
          performance in the average case. MySQL has also made concessions to
          NoSQL practitioners with features like a JSON data type, the “Document
          Store,” and support for sharding (horizontal scaling). On the
          non-relational side, MongoDB is primarily a document store containing
          JSON-like structures and a JavaScript interface. It’s known for being
          user-friendly (less administration overhead), performant for simple
          queries, and flexible thanks to its NoSQL underpinnings. Great for
          hierarchical data storage, it also supports familiar relational
          concepts from indexing, to aggregation, to some measure of ACID
          compliance. Like MySQL, it is compatible with many platforms and
          programming environments, despite relative recency.
        </p>
      </div>
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : What are the difference between
          <span className="text-red-500"> Javascript</span> and
          <span className="text-red-500"> Node.js</span> ?
        </h3>
        <p>
          <span className="underline">Ans</span> : 1. JavaScript is a
          client-side scripting language that is lightweight, cross-platform,
          and interpreted. Both Java and HTML include it. Node.js, on the other
          hand, is a V8-based server-side programming language. As a result, it
          is used to create network-centric applications. It's a networked
          system made for data-intensive real-time applications. If we compare
          node js vs. python, it is clear that node js will always be the
          preferred option. 2. JavaScript is a simple programming language that
          can be used with any browser that has the JavaScript Engine installed.
          Node.js, on the other hand, is an interpreter or execution environment
          for the JavaScript programming language. It requires libraries that
          can be conveniently accessed from JavaScript programming to be more
          helpful. 3. Any engine may run JavaScript. As a result, writing
          JavaScript is incredibly easy, and any working environment is similar
          to a complete browser. Node.js, on the other hand, only enables the V8
          engine. Written JavaScript code, on the other hand, can run in any
          context, regardless of whether the V8 engine is supported. 4. A
          specific non-blocking operation is required to access any operating
          system. There are a few essential objects in JavaScript, but they are
          entirely OS-specific. Node.js, on the other hand, can now operate
          non-blocking software tasks out of any JavaScript programming. It
          contains no OS-specific constants. Node.js establishes a strong
          relationship with the system files, allowing companies to read and
          write to the hard drive. 5. The critical benefits of JavaScript
          include a wide choice of interfaces and interactions and just the
          proper amount of server contact and direct visitor input. Node.js, on
          the other hand, offers node package management with over 500 modules
          and the capacity to handle many requests at the same time. It also
          offers the unique ability to enable microservice architecture and the
          Internet of Things.
        </p>
      </div>
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : What is
          <span className="text-red-500"> JWT </span> and how does it work ?
        </h3>
        <p>
          <span className="underline">Ans</span> : JWTs or JSON Web Tokens are
          most commonly used to identify an authenticated user. They are issued
          by an authentication server and are consumed by the client-server (to
          secure its APIs). JWTs differ from other web tokens in that they
          contain a set of claims. Claims are used to transmit information
          between two parties. What these claims are depends on the use case at
          hand. For example, a claim may assert who issued the token, how long
          it is valid for, or what permissions the client has been granted. A
          JWT is a string made up of three parts, separated by dots (.), and
          serialized using base64. In the most common serialization format,
          compact serialization, the JWT looks something like this:
          xxxxx.yyyyy.zzzzz.
        </p>
      </div>
      <div className="border-2 border-slate-400 shadow-gray-600 shadow-lg rounded-2xl p-4 text-left w-4/6 mx-auto mt-10">
        <h3 className="font-semibold ">
          Ques : How does
          <span className="text-red-500"> Node.js </span> handle multiple
          requests at a time ?
        </h3>
        <p>
          <span className="underline">Ans</span> : We know NodeJS application is
          single-threaded. Say, if processing involves request A that takes 10
          seconds, it does not mean that a request which comes after this
          request needs to wait 10 seconds to start processing because NodeJS
          event loops are only single-threaded. The entire NodeJS architecture
          is not single-threaded. How NodeJS handle multiple client requests?
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
