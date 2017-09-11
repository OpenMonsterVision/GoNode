# GoNode
Implementing things in node vs Go
### Prisoner
https://www.hackerrank.com/challenges/save-the-prisoner/problem

A jail has N  prisoners, and each prisoner has a unique id number, S , ranging from 1  to N. There are M sweets that must be distributed to the prisoners.

The jailer decides the fairest way to do this is by sitting the prisoners down in a circle (ordered by ascending S ), and then, starting with some random S, distribute one candy at a time to each sequentially numbered prisoner until all  candies are distributed. For example, if the jailer picks prisoner S, then his distribution order would be  until all  sweets are distributed.

But wait—there's a catch—the very last sweet is poisoned! Can you find and print the ID number of the last prisoner to receive a sweet so he can be warned?

Input Format

The first line contains an integer, , denoting the number of test cases. 
The  subsequent lines each contain  space-separated integers: 
N (the number of prisoners), M (the number of sweets), and S (the prisoner ID), respectively.


dustyPrisoner.go
```
real    0m0.274s
user    0m0.215s
sys    0m0.080s
```
dustyPrisoner.js
```
real    0m0.385s
user    0m0.350s
sys    0m0.033s
```
### Sleeping Barber
As appears on Wiki:
``` python
# The first two are mutexes (only 0 or 1 possible)
Semaphore barberReady = 0
Semaphore accessWRSeats = 1     # if 1, the number of seats in the waiting room can be incremented or decremented
Semaphore custReady = 0         # the number of customers currently in the waiting room, ready to be served
int numberOfFreeWRSeats = N     # total number of seats in the waiting room

def Barber():
  while true:                   # Run in an infinite loop.
    wait(custReady)             # Try to acquire a customer - if none is available, go to sleep.
    wait(accessWRSeats)         # Awake - try to get access to modify # of available seats, otherwise sleep.
    numberOfFreeWRSeats += 1    # One waiting room chair becomes free.
    signal(barberReady)         # I am ready to cut.
    signal(accessWRSeats)       # Don't need the lock on the chairs anymore.
    # (Cut hair here.)

def Customer():
    wait(accessWRSeats)         # Try to get access to the waiting room chairs.
    if numberOfFreeWRSeats > 0: # If there are any free seats:
      numberOfFreeWRSeats -= 1  #   sit down in a chair
      signal(custReady)         #   notify the barber, who's waiting until there is a customer
      signal(accessWRSeats)     #   don't need to lock the chairs anymore
      wait(barberReady)         #   wait until the barber is ready
      # (Have hair cut here.)
    else:                       # otherwise, there are no free seats; tough luck --
      signal(accessWRSeats)     #   but don't forget to release the lock on the seats!
      # (Leave without a haircut.)
```
