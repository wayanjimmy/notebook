---
title: "Go Time #104: Building search tools in Go with Marty Schoch"
metaTitle: "Go Time #104: Building search tools in Go with Marty Schoch"
metaDescription: "Go Time #104: Building search tools in Go with Marty Schoch"
---

What is the naive approach of building a search engine?

The basic way I think about it is you really have the overall process divided between the two phases. We think of indexing, which is the process by which you take your sets of things that you wanna work with - “documents” is another word you’ll hear us use a lot - and you’re gonna ingest those and build the index. You’re gonna spend the CPU time to crunch some things around in the documents, and ultimately create some representation that we call the index.

That could be in memory only, or more commonly you also wanna be able to persist that to disk, so that you can sort of stop your process, start it again later, and so forth. All of that is what we talk about as the indexing phase.
Then once you have an index built, you often want to then use it to run searches. The idea is, like you said, I have some notion of “I wanna find all the documents that have this word, or this set of strings.” So that’s your search phase of operation there.

The basic idea is you wanna think in advance about what kinds of searches you wanna run, and ultimately that will help you decide what the right index to build is. It’s not like a one-size-fits-all solution; you do need to give thought to what kinds of searches do I wanna run, and then make sure that I build the appropriate index to serve those kinds of queries later.

Elastic search and Solr is built on top of Lucene
To be completely honest, everyone would probably agree that Lucene is probably considered to be the state of the art in terms of this space, for full-text search. It’s been around for a long time, it’s open source as well, it’s written in Java, and it has a lot of people that have used it. Elasticsearch is really a whole company, starting with a server, and now a whole suite of things that started by building on top of Lucene.

There’s Solr, which is another product out there that’s (again) built on top of Lucene… And Lucene has contributors from both Elasticsearch and Solr pouring improvements into it… So that’s really what I would say is the state of the art. And when I say that, what I mean is it’s proven, it’s been around for a while, and it’s like - you’re not just gonna sit down and say “Let’s just rewrite Lucene. Let’s just port Lucene.” Those are big efforts, just because of the sheer number of 15-20 years of effort going into these projects.

### Links

- [Bleve fulltext search](/coding/bleve.md)
- https://changelog.com/gotime/104

#search-engine #golang #fulltext-search #podcast-notes
