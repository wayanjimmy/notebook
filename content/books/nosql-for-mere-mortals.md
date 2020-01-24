---
title: "NoSQL for Mere Mortals"
metaTitle: "NoSQL for Mere Mortals"
metaDescription: "NoSQL for Mere Mortals""
---

NoSQL databases fall into 4 broad categories :

-	key-value
-	document
-	column family
-	graph databases

Key-value databases
---

Employ a simple model that enables you to store and look up a datum (value) using an identifier (key).

Document databases
---

Expand on ideas of key-value databases to organize groups of key values into a logical structure known as a document. Document databases are high perfomance, flexible data management systems that are increasingly used in a broad range of data management tasks.

Column family databases
---

Share superficial similarities to relational databases. The name of the first implementation of a column family database, Google Big Table, hints at the connection to relational databases and their core data structure, the table. Column family databases are used for more of the largest and most demanding, data intensive applications.

Graph databases
---

Well suited to modeling networks--that is, things connected to other things. The range of use cases spans computer communicationg with other computers to people interacting with each other.

Data Management with Distributed Databases
---

Balancing Response Times, Consistency, and Durability
---

NoSQL databases often use the concept of quorums when working with reads and writes. A **quorum** is the number of servers that must respond to a read or write operation for the operation considered to be complete.

The database counts the number of distinct response values and returns the one that meets or exceeds a configurable threshold.

For example, assume data in a NoSQL database is replicated to five servers and you have set the read threshold to 3. As soon as three servers respond with the same response, the result is returned to the user.
