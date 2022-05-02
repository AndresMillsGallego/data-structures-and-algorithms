# Hashtables

For this challenge we are introduced to the Hash Table data structure.  I see this structure as an organized filing system.  With other data structures at times it can feel as if we are throwing things in with our eyes closed so to speak, then utilizing traversal methods to find things later.  

With the Hash Table structure things are done much more purposefully.  We store our data in a very specific place, so that we don't really have to "look" for it when we need it....we just go back to the exact place that we stored it, and it should be there!  
This is why I compare it to a filing system.  Just like with physical filing systems, things don't always work and there can be collisions which won't always break the table, but they do need to be dealt with. 

### Further Reading On Hast Tables

[Intro](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-30/resources/Hashtables.html)

[Basics](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)

[Wiki](https://en.wikipedia.org/wiki/Hash_table)

## Challenge

The challenge is to implement our own `HashTable` class that utilizes `Node` and `LinkedList` data structures to keep things organized. 
The methods we are going to create, and test for this challenge are:

- `hash`
  - "Hashes" the key that is provided as an argument.  This value provides the index postion
- `set`
  - Utilizing the hashed value of the key, this takes the key:value pair passed in as the argument and sets it in the table at the correct position
- `get`
  - Using the key, this method will retrieve the value, or key:value pair, if it exists in the hash table
- `contains`
  - This returns a boolean based on if the key exists in the table
- `keys`
  - This returns a list of the keys that are in the table

## Approach & Efficiency

My approach to this challenge was to build off what we did during class 30 with Ryan.  The Node and Linked List structures I am comfortable with.  The Hash Table logic seems very straight forward and useful actually.  Checking keys and values as they potentially become nested inside Linked Lists due to collisions is the only thing that could prove tricky.

