# Systems Design

## Fallacies of DS

 - Network is reliable
 - Latency is zero
 - Bandwidth is infinite
 - Topology doesn't change
 - Network is secure
 - Only one administrator
 - Transport cost is zero

## Characteristics
 
 - No shared clock
 - No shared memory
 - Shared resources
 - Concurrency and Consistency

## Communication

 - Different parts of DS need to be able to talk
 - Requires agreed upon format or protocol
 - Lots of things can go wrong, need to handle them somehow:
   - Client can't find server
   - Server crash mid request
   - Server response is lost
   - Client crashes

## Benefits

 - More reliable, fault tolerant
 - Scalability
 - Lower latency, increased performance
 - Cost effective

## SD Performance Metrics

### Scalability

 - Ability of a system to grow and manage increased traffic
 - Increased volume of data or requests

### Reliability

 - Probability a system will fail during a period of time
 - Slightly harder to define than hardware reliability

#### Mean Time Between Failure

```markdown
MTBF = (Total Elapsed Time - total downtime) / number of failures

Example:
(24 hours - 4 hours downtime) / 4 failures = 5 hour MTBF

```

### Availability

 - Amount of time a system is operational during a period of time
 - Poorly designed software requiring downtime for updates is less available

#### Availability calculation

```markdown
Availability % = (available time / total time) * 100

Example:
(23 hours / 24 hours) * 100 = 95.83%
```

##### Table of downtime for 9's

|Availability| Annual Downtime              |
|------------|------------------------------|
|99%         | 3 days, 15 hours, 40 minutes |
|99.9%       | 8 hours, 46 minutes          |
|99.99%      | 52 minutes, 36 seconds       |
|99.999%     | 5.26 minutes                 |

### Reliable vs Available

 - Reliable system is always an available system
 - Availability can be maintained by redundancy, but system may not be reliable
 - Reliable software will be more profitable because providing same service requires less backup resources
 - Requirements will depend on function of the software

### Efficiency

 - How well the system performs
 - Latency and throughput often used as metrics

---

 - Load balancing
   - DNS load balancing
     - DNS load balancing relies on the fact that most clients use the first IP address they receive for a domain
     - In most Linux distributions, DNS by default sends the list of IP addresses in a different order each time it responds to a new client, using the round‑robin method
     - But lacks reliability qnd efficiency as DNS does not check for server or network outages or errors, and so always returns the same set of IP addresses for a domain even if servers are down or inaccessible.
   - NGNIX
 - Caching
   - Types: Memcached, Redis, Cassandra
   - too much data in cache can slow it down, therefore there are policies to manage cache
   - Policies:
     - LRU (Least Recently Used) - kick out the oldest ones
     - LFU (Least Frequently Used) - e.g. by using a counter, measure which one is most frequently used, and kick out the ones that are the least to free space for new cache
   - Problems
     - Extra call
     - Thrashing - when you replace cache data too frequent so that it is not being used enough for the cache to be useful
       - Extreme case is when cache has space for 1 item, it is stored there, and different item is requested, so cache hit is miss, data fetched, current item in cache removed, new one stored, but later the one that was removed is requested
     - Data consistency (old value in cache)
     - Where to put cache:
       - close to the app servers (each one has one), local memory of servers
         - faster for the servers, but can be out of sync if one fails
         - OK for data that can be inconsistent (e.g. with user profiles)
       - one global cache (between servers and master DB)
         - slower for the servers but more accurate 
         - that way there's one and if one server fails, the other(s) still check the global cache
         - good for keeping consistency, e.g. financial data
     - Consistency, e.g. when applying change to a profile: 
       - Write-Through - data is updated on the cache and then in the DB
         - problems with inconsistency when same entry is on more than 1 cache
         - if DB write fails, we have to implement a retry mechanism that will read from cache
           - which itself is in memory and can be lost
       - Write-back - data is updated in the DB, cache entry is removed
         - less efficient (cache is removed, needs to be recreated, DB read is requested)
       - Hybrid of both:
         - when the data is not consistency fragile, it can be refreshed on one cache server
         - not updated yet in DB, perhaps more updates are on the way (e.g. editing a document), or more entries are added
         - then a single bulk request is sent to the DB
 - What DB to pick for what
   - Caching: e.g. Redis (memory DBs)
   - Blob data: S3 (and alike) + CDN (at the edge)
   - Text search OR fuzzy search (Airport / Airprot - edit distance of 2): Elastic Search, Solr (both on top of Apache Lucene)
     - both don't provide reliability (are search engines) and as such should not be used as primary data storage, therefore they should be fed from main database to use search on the data provided
   - metrics data: time series database
     - an extension of relational DBs
     - append only write mode
     - bulk read, not random single read
     - InfluxDB, OpenTSDB
   - offline, analytics data analysis, reporting etc.
     - do various queries on the data
     - a lot of data from different sources
     - Hadoop
   - pattern:
     - Structured data?
       - Yes; need ACID (atomicity, consistency, isolation, durability)? https://database.guide/what-is-acid-in-databases/
         - Yes: RDBMS (MySQL, Oracle, SQL Server, Postgres)
       - No
         - Data types, Queries?
           - Yes: Document DB (MongoDB, DynamoDB, ...)
         - Ever increasing data + finite queries:
           - Yes: Columnar DB (Cassandra)
 - CDNs
   - decrease load on application server
   - near geographically to the user
 - DB sharding
   - Vertical: users DB, posts DB, comments DB, etc. 
   - Horizontal: e.g. A-K posts table, L-Z table (both on separate machines) OR mod % n on IDs and that will point to specific machines
     - Can even go to a point that very active accounts (such as Elon Musk's) can have its own machine(s)
 - NoSQL
   - Due to their nature (key-value store), they can scale automatically
     - MongoDB, DynamoDB, Firestore

 

TBC ...
